import {
  Body,
  Controller,
  Delete,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardsService } from 'src/services/cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async create(@Body() createDto: CreateCardDto) {
    return await this.cardsService.createOne(createDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateDto: UpdateCardDto) {
    Logger.debug('card update: ' + updateDto.front);
    return await this.cardsService.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.cardsService.deleteOne(id);
  }
}
