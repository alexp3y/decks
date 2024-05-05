import { Body, Controller, Get, Post } from '@nestjs/common';
import { Deck } from 'src/model/deck.entity';
import { DecksService } from 'src/services/decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get()
  async getAll(): Promise<Deck[]> {
    return this.decksService.findAll();
  }

  @Post()
  async create(@Body() createDto: CreateDeckDto) {
    return await this.decksService.createOne(createDto);
  }
}
