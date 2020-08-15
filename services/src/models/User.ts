import {
  Model,
  Column,
  HasMany,
  Table,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

import Deck from './Deck';
import Message from './Message';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'users' })
class User extends Model<User> {
  @Field((type) => ID)
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Field()
  @CreatedAt
  public createdAt!: Date;

  @Field()
  @UpdatedAt
  public updatedAt!: Date;

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Field()
  name!: String;

  @Field({ description: 'User email address' })
  @Column
  email!: string;

  @Field()
  @Column
  password!: string;

  @HasMany(() => Deck)
  decks!: Deck[];

  @HasMany(() => Message)
  messages!: Message[];
}

export default User;
