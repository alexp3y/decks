import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDeckDto } from 'src/controllers/dto/create-deck.dto';
import { Deck } from 'src/model/deck.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck) private readonly decksRepo: Repository<Deck>,
  ) {}

  async findAll(): Promise<Deck[]> {
    return await this.decksRepo.find({ relations: { cards: true } });
  }

  async findOne(id: string): Promise<Deck> {
    return this.decksRepo.findOne({
      where: { id },
      relations: {
        cards: true,
      },
    });
  }

  async createOne(createDto: CreateDeckDto): Promise<Deck> {
    const created = await this.decksRepo.save(createDto);
    return this.findOne(created.id);
  }
}
