import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from './card.entity';

@Entity({ name: 'deck' })
export class Deck {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @OneToMany(() => Card, (card: Card) => card.deck)
  cards: Card[];
}
