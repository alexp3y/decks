import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import axios from 'axios';
import { ICard, IDeck } from './types';
import { Counter } from './components/Counter';

const deck: IDeck = {
  cards: [],
};

const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  console.log('clicked 1!');
  console.log(deck.cards);
};

function App() {
  const [card, setCard] = useState({
    index: 0,
    id: 0,
    front: '',
    back: '',
    flipped: false,
  });

  useEffect(() => {
    axios.get('http://localhost:8080/cards').then((res) => {
      deck.cards = res.data;
      deck.cards.forEach((c, i) => (c.index = i));
      setCard(deck.cards[0]);
    });
  }, []);

  const previousCard = () => {
    if (card.index > 0) {
      setCard(deck.cards[card.index - 1]);
    }
  };

  const nextCard = () => {
    if (card.index < deck.cards.length - 1) {
      setCard(deck.cards[card.index + 1]);
    }
  };

  const flipCard = () => {
    let flipped: ICard = {
      id: card.id,
      front: card.front,
      back: card.back,
      index: card.index,
      flipped: !card.flipped,
    };

    console.log(flipped);
    setCard(flipped);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.keyCode) {
      case 37:
        previousCard();
        break;
      case 39:
        nextCard();
        break;
      case 32:
        flipCard();
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div
        tabIndex={0}
        className="Content"
        onKeyDown={handleKeyPress}
        onClick={handleClick}
      >
        <Counter index={card.index} size={deck.cards.length} />
        <Card size={deck.cards.length} card={card}></Card>
      </div>
    </div>
  );
}

export default App;
