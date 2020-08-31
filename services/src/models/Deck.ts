import {
  Column,
  HasMany,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import { Card } from './Card';
import { User } from './User';
import { ID, Field, ObjectType } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'decks' })
export class Deck extends Model {
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
  @AllowNull(false)
  @Column
  name!: string;

  @Field()
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => Card)
  cards!: Card[];
}
