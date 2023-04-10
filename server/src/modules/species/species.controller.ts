import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { CreateSpeciesDTO } from './dtos/create-species.dto';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(
    @Inject(SpeciesService) private readonly speciesService: SpeciesService,
  ) {}

  @Get('/')
  getAllSpecies() {
    return this.speciesService.getAllSpecies();
  }

  @Post('/')
  createSpecies(@Body() body: CreateSpeciesDTO) {
    return this.speciesService.createSpecies(body);
  }

  @Delete('/:speciesId')
  deleteSpecies(@Param('speciesId') speciesId: number) {
    return this.speciesService.deleteSpecies(speciesId);
  }
}
