import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from './model/deck.entity';
import { Card } from './model/card.entity';
import { DecksController } from './controllers/decks.controller';
import { DecksService } from './services/decks.service';
import { CardsService } from './services/cards.service';
import { CardsController } from './controllers/cards.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [configuration],
    }),
    TypeOrmModule.forFeature([Deck, Card]),
    DatabaseModule,
  ],
  controllers: [AppController, DecksController, CardsController],
  providers: [AppService, DecksService, CardsService],
})
export class AppModule {}
