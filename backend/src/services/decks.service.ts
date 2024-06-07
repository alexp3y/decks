import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDeckDto } from 'src/controllers/dto/create-deck.dto';
import { UpdateDeckDto } from 'src/controllers/dto/update-deck.dto';
import { Deck } from 'src/model/deck.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck) private readonly decksRepo: Repository<Deck>,
  ) {}

  async findAll(): Promise<Deck[]> {
    return await this.decksRepo.find({
      order: {
        createdOn: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise<Deck> {
    return this.decksRepo.findOne({ where: { id } });
  }

  async createOne(createDto: CreateDeckDto): Promise<Deck> {
    const created = await this.decksRepo.save(
      Object.assign(createDto, new Deck()),
    );
    return this.findOne(created.id);
  }

  async update(id: string, updates: UpdateDeckDto): Promise<Deck> {
    const existing = await this.findOne(id);
    if (!existing) {
      throw new Error('Deck Not Found');
    }
    const updated = await this.decksRepo.save({
      ...existing,
      color: updates.color,
      name: updates.name,
    });
    return updated;
  }

  async deleteOne(id: string) {
    await this.decksRepo.delete(id);
  }
}
