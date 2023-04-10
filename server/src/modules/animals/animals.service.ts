import {
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { extname } from 'path';
import { saveFile } from 'src/utils/functions/file-system/write-file';
import { genereatePublicLink } from 'src/utils/functions/generic/generate-public-link';
import { hashify } from 'src/utils/functions/generic/hashify';
import {
  Between,
  In,
  LessThanOrEqual,
  MoreThanOrEqual,
  Raw,
  Repository,
} from 'typeorm';
import { SpeciesService } from '../species/species.service';
import { TagsService } from '../tags/tags.service';
import AnimalsEntity from './animals.entity';
import CreateAnimalsFormdataDTO from './dtos/create-animals.dto';
import { GetFilteredAnimalsDTO } from './dtos/get-filtered-animals.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(AnimalsEntity)
    private readonly animalsRepository: Repository<AnimalsEntity>,
    @Inject(TagsService) private readonly tagsService: TagsService,
    @Inject(SpeciesService) private readonly speciesService: SpeciesService,
  ) {}

  async getAnimals({
    name,
    tags,
    species,
    ageMax,
    ageMin,
    sex,
    size,
  }: GetFilteredAnimalsDTO) {
    const tagsNormalized = tags instanceof Array ? tags : [tags];

    console.log(tagsNormalized, tags);

    return await this.animalsRepository.find({
      where: {
        name: name && Raw((nameAlias) => `${nameAlias} ILIKE '%${name}%'`),
        tags: tags && { id: In(tags) },
        species: species && { id: species },
        sex: sex,
        size: size,
        age: (() => {
          if (ageMin && ageMax) {
            return Between(ageMin, ageMax);
          }
          if (!ageMin && !ageMax) {
            return null;
          }
          if (ageMin) {
            return MoreThanOrEqual(ageMin);
          }
          if (ageMax) {
            return LessThanOrEqual(ageMax);
          }
        })(),
      },
      select: {
        id: true,
        name: true,
        size: true,
        sex: true,
        location: true,
        age: true,
        imageLink: true,
        tags: { name: true, id: true },
        species: { name: true, id: true },
      },
      relations: { tags: true, species: true },
    });
  }

  async createAnimal(
    {
      tagsIds,
      speciesId,
      name,
      age,
      location,
      sex,
      size,
    }: CreateAnimalsFormdataDTO,
    imageFile: Express.Multer.File,
  ) {
    let tagsIdsParsed: number[];

    try {
      tagsIdsParsed = JSON.parse(tagsIds) || [];
    } catch {
      throw new HttpException('Wrong tags ids.', HttpStatus.CONFLICT);
    }

    // check tags and species
    const candidateSpecies = await this.speciesService.findOneSpecies(
      speciesId,
    );

    if (!candidateSpecies) {
      throw new HttpException(
        `No such species id (${speciesId}).`,
        HttpStatus.CONFLICT,
      );
    }

    let areTagsValid = true;

    for (const tagId of tagsIdsParsed) {
      const candidate = await this.tagsService.findOneTag(tagId);
      areTagsValid &&= !!candidate;
    }

    if (!areTagsValid) {
      throw new HttpException(
        `Recheck your tags validity.`,
        HttpStatus.CONFLICT,
      );
    }

    imageFile.filename = `${hashify(
      `${Date.now()}${imageFile.originalname}`,
    )}${extname(imageFile.originalname)}`;

    console.log(imageFile.filename, imageFile.originalname);

    saveFile(imageFile);

    const newAnimal = await this.animalsRepository
      .create({
        age: age,
        name: name,
        species: candidateSpecies,
        location: location,
        tags: tagsIdsParsed.map((tag) => ({
          id: tag,
        })),
        imageLink: genereatePublicLink(imageFile),
        sex: sex,
        size: size,
      })
      .save();

    return newAnimal;
  }

  async deleteAnimal(animalId: number) {
    return await this.animalsRepository.delete(animalId);
  }

  async getOneAnimal(animalId: number) {
    return await this.animalsRepository.findOne({
      where: { id: animalId },
      relations: { species: true, tags: true },
    });
  }
}
