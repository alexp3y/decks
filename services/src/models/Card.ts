import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import { Deck } from './Deck';
import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'cards' })
export class Card extends Model<Card> {
  @Field((type) => ID)
  @PrimaryKey
  @Column
  id!: number;

  @Field()
  @CreatedAt
  public createdAt!: Date;

  @Field()
  @UpdatedAt
  public updatedAt!: Date;

  @Field()
  @Column
  front!: string;

  @Field()
  @Column
  back!: string;

  @Field()
  @ForeignKey(() => Deck)
  @Column
  deckId!: string;

  @BelongsTo(() => Deck)
  deck!: Deck;
}
