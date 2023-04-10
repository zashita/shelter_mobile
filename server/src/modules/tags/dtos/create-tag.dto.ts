import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTagDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 63)
  name: string;
}
