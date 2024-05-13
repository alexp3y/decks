import { shortId } from 'src/utils/short-id.util';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
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

  @OneToMany(() => Card, (card: Card) => card.deck)
  cards: Card[];
}
