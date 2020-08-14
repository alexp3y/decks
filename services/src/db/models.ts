import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({
  tableName: 'decks',
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
})
export class Deck extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Card)
  cards!: Card[];
}

@Table({
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
  tableName: 'cards',
})
export class Card extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Deck)
  chefId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  front!: string;

  @Column({ type: DataType.STRING })
  back!: string;

  @BelongsTo(() => Deck)
  deck!: Deck;
}

export default [Deck, Card];
