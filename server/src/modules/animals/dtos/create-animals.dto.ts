import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { transformToNumberUtil } from 'src/utils/decorators/transformers/transform-to-array.util';
import { AnimalSexesEnum } from 'src/utils/enums/animal-sexes.enum';
import { AnimalSizesEnum } from 'src/utils/enums/animal-sizes.enum';

export default class CreateAnimalsFormdataDTO {
  @IsString()
  @Length(2, 63)
  name: string;

  @IsString()
  @Length(0, 127)
  location: string;

  @Transform(({ value }) => transformToNumberUtil(value))
  @IsInt()
  @Min(0)
  @Max(100)
  age: number;

  @IsJSON()
  @IsOptional()
  tagsIds: string;

  @Transform(({ value }) => transformToNumberUtil(value))
  @IsInt()
  speciesId: number;

  @IsEnum(AnimalSexesEnum)
  sex: AnimalSexesEnum;

  @IsEnum(AnimalSizesEnum)
  size: AnimalSizesEnum;
}
