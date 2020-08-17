import {
  Model,
  Column,
  HasMany,
  Table,
  PrimaryKey,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript'

import Deck from './Deck'
import Message from './Message'
import { ObjectType, Field, ID, Root } from 'type-graphql'

@ObjectType()
@Table({ tableName: 'users' })
export default class User extends Model<User> {
  @Field((type) => ID)
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Field()
  @CreatedAt
  public createdAt!: Date

  @Field()
  @UpdatedAt
  public updatedAt!: Date

  @Column
  firstName!: string

  @Column
  lastName!: string

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`
  }

  @Field({ description: 'User email address' })
  @Column
  email!: string

  @Column
  password!: string

  @HasMany(() => Deck)
  decks!: Deck[]

  @HasMany(() => Message)
  messages!: Message[]
}
