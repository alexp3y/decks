import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Deck } from './deck.entity';
import { CardType } from './enum/card-type.enum';

@Entity({ name: 'card' })
export class Card {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({
    type: 'enum',
    enum: CardType,
    enumName: 'card_type_enum',
    nullable: false,
  })
  type: CardType;

  @Column()
  front: string;

  @Column()
  back: string;

  @Column({ default: false })
  starred: boolean;

  @Column({ default: 0 })
  color: number;

  @Column({ name: 'deck_id' })
  readonly deckId: string;

  @ManyToOne(() => Deck, (deck: Deck) => deck.cards)
  @JoinColumn({ name: 'deck_id' })
  deck: Deck;
}
