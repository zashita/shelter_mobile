import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BASIC_SPECIES } from 'src/utils/seedings/basic-species';
import { Repository } from 'typeorm';
import { CreateSpeciesDTO } from './dtos/create-species.dto';
import SpeciesEntity from './species.entity';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(SpeciesEntity)
    private readonly speciesRepository: Repository<SpeciesEntity>,
  ) {
    this.seedWithBasicSpecies();
  }

  private async seedWithBasicSpecies() {
    for (const species of BASIC_SPECIES) {
      const candidate = await this.speciesRepository.findOne({
        where: { name: species },
      });

      if (!candidate) {
        await this.speciesRepository.create({ name: species }).save();
        console.log(`Created ${species} species.`);
      }
    }
  }

  async findOneSpecies(speciesId: number) {
    return await this.speciesRepository.findOne({ where: { id: speciesId } });
  }

  async getAllSpecies() {
    return await this.speciesRepository.find({
      select: { id: true, name: true },
    });
  }

  async createSpecies({ name }: CreateSpeciesDTO) {
    return await this.speciesRepository.create({ name: name }).save();
  }

  async deleteSpecies(speciesId: number) {
    return await this.speciesRepository.delete(speciesId);
  }
}
