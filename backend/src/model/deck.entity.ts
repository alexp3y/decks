import { shortId } from 'src/utils/short-id.util';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Card } from './card.entity';

@Entity({ name: 'deck' })
export class Deck {
  constructor() {
    this.id = shortId();
  }
  @PrimaryColumn({ name: 'id', type: 'varchar', length: '12' })
  readonly id = shortId();

  @Column()
  name: string;

  @Column({ default: 'DEFAULT' })
  color: string;

  @Column({ default: false })
  starred: boolean;

  @CreateDateColumn({
    name: 'created_on',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdOn: Date;

  @OneToMany(() => Card, (card: Card) => card.deck)
  cards: Card[];
}
