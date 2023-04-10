import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BASIC_TAGS } from 'src/utils/seedings/basic-tags';
import { Repository } from 'typeorm';
import { CreateTagDTO } from './dtos/create-tag.dto';
import TagsEntity from './tags.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagsEntity)
    private tagsRepository: Repository<TagsEntity>,
  ) {
    this.seedWithBasicTags();
  }

  private async seedWithBasicTags() {
    for (const tag of BASIC_TAGS) {
      const candidate = await this.tagsRepository.findOne({
        where: { name: tag },
      });

      if (!candidate) {
        await this.tagsRepository.create({ name: tag }).save();
        console.log(`Created ${tag} tag.`);
      }
    }
  }

  async findOneTag(tagId: number) {
    return await this.tagsRepository.findOne({ where: { id: tagId } });
  }

  async getAllTags() {
    return await this.tagsRepository.find({ select: { name: true, id: true } });
  }

  async createTag({ name }: CreateTagDTO) {
    return await this.tagsRepository.create({ name: name }).save();
  }

  async deleteTag(tagId: number) {
    return await this.tagsRepository.delete(tagId);
  }
}
