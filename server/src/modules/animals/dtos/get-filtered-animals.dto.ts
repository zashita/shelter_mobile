import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsIn,
  IsInt,
  IsJSON,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { transformToNumberUtil } from 'src/utils/decorators/transformers/transform-to-array.util';
import { AnimalSexesEnum } from 'src/utils/enums/animal-sexes.enum';
import { AnimalSizesEnum } from 'src/utils/enums/animal-sizes.enum';

export class GetFilteredAnimalsDTO {
  @IsOptional()
  name?: string;

  @IsOptional()
  tags?: number[];

  @IsOptional()
  species?: number;

  @IsOptional()
  @Transform(({ value }) => transformToNumberUtil(value))
  @IsInt()
  ageMin?: number;

  @IsOptional()
  @Transform(({ value }) => transformToNumberUtil(value))
  @IsInt()
  ageMax?: number;

  @IsOptional()
  @IsEnum(AnimalSizesEnum)
  size: AnimalSizesEnum;

  @IsOptional()
  @IsEnum(AnimalSexesEnum)
  sex: AnimalSexesEnum;
}
