import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from 'src/controllers/dto/create-card.dto';
import { UpdateCardDto } from 'src/controllers/dto/update-card.dto';
import { Card } from 'src/model/card.entity';
import { CardType } from 'src/model/enum/card-type.enum';
import { shortId } from 'src/utils/short-id.util';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card) private readonly cardsRepo: Repository<Card>,
  ) {}

  async findAll(): Promise<Card[]> {
    return await this.cardsRepo.find();
  }

  async findOne(id: string): Promise<Card> {
    return this.cardsRepo.findOne({
      where: { id },
      relations: {
        deck: true,
      },
    });
  }

  async findByDeck(deckId: string): Promise<Card[]> {
    return this.cardsRepo.find({ where: { deckId } });
  }

  async createOne(createDto: CreateCardDto): Promise<Card> {
    if (!createDto.id) {
      createDto.id = shortId();
    }
    const created = await this.cardsRepo.save({
      ...createDto,
      type: createDto.type as CardType,
    });
    return this.cardsRepo.findOne({ where: { id: created.id } });
  }

  async update(id: string, updates: UpdateCardDto): Promise<Card> {
    const existing = await this.findOne(id);
    if (!existing) {
      throw new Error('Card Not Found');
    }
    const updated = await this.cardsRepo.save({
      ...existing,
      type: updates.type as CardType,
      front: updates.front,
      back: updates.back,
      starred: updates.starred,
    });
    return updated;
  }

  async deleteOne(id: string) {
    await this.cardsRepo.delete(id);
  }
}
