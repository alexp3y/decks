import { IsEnum, IsString } from 'class-validator';
import { CardType } from 'src/model/enum/card-type.enum';

export class CreateCardDto {
  @IsString()
  id: string;

  @IsEnum(CardType)
  type: string;

  @IsString()
  front: string;

  @IsString()
  back: string;

  @IsString()
  deckId: string;
}
