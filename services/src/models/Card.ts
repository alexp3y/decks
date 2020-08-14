import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import Deck from './Deck';

@Table({ tableName: 'cards' })
class Card extends Model<Card> {
  @Column
  front!: string;

  @Column
  back!: string;

  @ForeignKey(() => Deck)
  @Column
  deckId!: string;

  @BelongsTo(() => Deck)
  deck!: Deck;
}

export default Card;
