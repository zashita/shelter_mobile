import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import AnimalsEntity from './animals.entity';
import { TagsModule } from '../tags/tags.module';
import { SpeciesModule } from '../species/species.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalsEntity]),
    TagsModule,
    SpeciesModule,
  ],
  providers: [AnimalsService],
  controllers: [AnimalsController],
  exports: [AnimalsService],
})
export class AnimalsModule {}
