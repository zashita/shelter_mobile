import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Inject,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { query } from 'express';
import { DataUnitsEnum } from 'src/utils/enums/data-units.enum';
import { matchAtLeastOne } from 'src/utils/functions/generic/match-at-least-one';
import { AnimalsService } from './animals.service';
import CreateAnimalsFormdataDTO from './dtos/create-animals.dto';
import { GetFilteredAnimalsDTO } from './dtos/get-filtered-animals.dto';

@Controller('animals')
export class AnimalsController {
  constructor(
    @Inject(AnimalsService) private readonly animalsService: AnimalsService,
  ) {}

  @Get('/')
  getAnimals(@Query() query: GetFilteredAnimalsDTO) {
    return this.animalsService.getAnimals(query);
  }

  @Get('/:animalId')
  getOneAnimal(@Param('animalId') animalId: number) {
    return this.animalsService.getOneAnimal(animalId);
  }

  @Delete('/:animalId')
  deleteAnimal(@Param('animalId') animalId: number) {
    return this.animalsService.deleteAnimal(animalId);
  }

  @UseInterceptors(FileInterceptor('imageFile'))
  @Post('/')
  createAnimal(
    @Body() body: CreateAnimalsFormdataDTO,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 50 * DataUnitsEnum.MB }),
          new FileTypeValidator({
            fileType: matchAtLeastOne([
              'image/jpeg',
              'image/png',
              'image/webp',
              'image/gif',
            ]),
          }),
        ],
      }),
    )
    imageFile: Express.Multer.File,
  ) {
    return this.animalsService.createAnimal(body, imageFile);
  }
}
