import { Body, Controller, Get, Post } from '@nestjs/common';
import { Card } from 'src/model/card.entity';
import { CardsService } from 'src/services/cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }

  @Post()
  async create(@Body() createDto: CreateCardDto) {
    return await this.cardsService.createOne(createDto);
  }
}
