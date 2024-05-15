import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Deck } from 'src/model/deck.entity';
import { CardsService } from 'src/services/cards.service';
import { DecksService } from 'src/services/decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(
    private readonly decksService: DecksService,
    private readonly cardsService: CardsService,
  ) {}

  @Get()
  async getAll(): Promise<Deck[]> {
    return this.decksService.findAll();
  }

  @Post()
  async create(@Body() createDto: CreateDeckDto) {
    Logger.debug(createDto);
    return await this.decksService.createOne(createDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateDto: UpdateDeckDto) {
    Logger.debug(updateDto);
    return await this.decksService.update(id, updateDto);
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.decksService.findOne(id);
  }

  @Get(':id/cards')
  async getCards(@Param('id') id) {
    return await this.cardsService.findByDeck(id);
  }
}
