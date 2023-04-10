import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTagDTO } from './dtos/create-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(@Inject(TagsService) private readonly tagsService: TagsService) {}

  @Get('/')
  getTags() {
    return this.tagsService.getAllTags();
  }

  @Post('/')
  createTag(@Body() body: CreateTagDTO) {
    return this.tagsService.createTag(body);
  }

  @Delete('/:tagId')
  deleteTag(@Param('tagId') tagId: number) {
    return this.tagsService.deleteTag(tagId);
  }
}
