import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateSpeciesDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 63)
  name: string;
}
