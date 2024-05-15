import { IsString } from 'class-validator';

export class UpdateDeckDto {
  @IsString()
  name: string;

  @IsString()
  color: string;
}
