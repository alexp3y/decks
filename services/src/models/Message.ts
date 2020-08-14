import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import User from './User';

@Table({ tableName: 'messages' })
class Message extends Model<Message> {
  @Column
  text!: string;

  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  users!: User[];
}

export default Message;
