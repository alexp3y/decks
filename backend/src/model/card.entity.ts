import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Deck } from './deck.entity';
import { CardType } from './enum/card-type.enum';

@Entity({ name: 'card' })
export class Card {
  @PrimaryColumn({ name: 'id', type: 'varchar', length: '12' })
  readonly id: string;

  @Column({
    type: 'enum',
    enum: CardType,
    enumName: 'card_type_enum',
    nullable: false,
    default: CardType.GENERIC,
  })
  type: CardType;

  @Column({ nullable: true })
  front: string;

  @Column({ nullable: true })
  back: string;

  @Column({ default: false })
  starred: boolean;

  @Column({ default: 0 })
  color: number;

  @CreateDateColumn({
    name: 'created_on',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdOn: Date;

  @Column({ name: 'deck_id' })
  readonly deckId: string;

  @ManyToOne(() => Deck, (deck: Deck) => deck.cards)
  @JoinColumn({ name: 'deck_id' })
  deck: Deck;
}
