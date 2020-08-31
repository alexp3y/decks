import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import { User } from './User';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'messages' })
export class Message extends Model<Message> {
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
  text!: string;

  @Field()
  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  users!: User[];
}
