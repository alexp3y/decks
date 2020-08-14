import { Model, Column, HasMany, Table } from 'sequelize-typescript';

import Deck from './Deck';
import Message from './Message';
import { ObjectType } from 'type-graphql';

@ObjectType()
@Table({ tableName: 'users' })
class User extends Model<User> {
  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @HasMany(() => Deck)
  decks!: Deck[];

  @HasMany(() => Message)
  messages!: Message[];
}

export default User;
