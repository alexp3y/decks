import { IsEnum, IsString } from 'class-validator';
import { CardType } from 'src/model/enum/card-type.enum';

export class UpdateCardDto {
  @IsEnum(CardType)
  type: string;

  @IsString()
  front: string;

  @IsString()
  back: string;
}
