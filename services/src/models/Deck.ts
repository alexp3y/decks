import {
  Column,
  HasMany,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import Card from './Card';
import User from './User';

@Table({ tableName: 'decks' })
class Deck extends Model {
  @AllowNull(false)
  @Column
  name!: string;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => Card)
  cards!: Card[];
}

export default Deck;
