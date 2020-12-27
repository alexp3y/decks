import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { CardView } from './components/CardView';
import { DeckView } from './components/DeckView';
import { Overview } from './components/Overview';
import { AppState } from './types';

function App() {
  const [state, setState] = useState<AppState>({
    deckViewOn: true,
    cardViewOn: false,
    activeIndex: 0,
    deckReversed: false,
    cardFlipped: false,
    decks: [],
    cards: [],
  });

  useEffect(() => {
    async function fetchUserData() {
      let res = await axios.get('http://localhost:8080/users/1');
      state.user = res.data;
      res = await axios.get(
        `http://localhost:8080/decks?userId=${state.user!.id}`
      );
      state.decks = res.data;
      setState({ ...state });
    }
    fetchUserData();
  }, []);

  const fetchCards = async (deckId: string) => {
    let res = await axios.get(`http://localhost:8080/cards?deckId=${deckId}`);
    return res.data;
  };

  const previousCard = () => {
    if (state.activeIndex > 0) {
      let prevIndex = state.activeIndex - 1;
      setState({
        ...state,
        activeCard: state.cards[prevIndex],
        activeIndex: prevIndex,
        cardFlipped: false,
      });
    }
  };

  const nextCard = () => {
    if (state.activeIndex < state.cards.length - 1) {
      let nextIndex = state.activeIndex + 1;
      setState({
        ...state,
        activeCard: state.cards[nextIndex],
        activeIndex: nextIndex,
        cardFlipped: false,
      });
    }
  };

  const randomCard = () => {
    let randomIndex = Math.floor(Math.random() * state.cards.length);
    setState({
      ...state,
      activeCard: state.cards[randomIndex],
      activeIndex: randomIndex,
      cardFlipped: false,
    });
  };

  const turnDeck = () => {
    setState({
      ...state,
      deckReversed: !state.deckReversed,
    });
  };

  const flipCard = () => {
    setState({ ...state, cardFlipped: !state.cardFlipped });
  };

  const closeCardView = () => {
    setState({ ...state, cardViewOn: false });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowRight':
        nextCard();
        break;
      case 'ArrowLeft':
        previousCard();
        break;
      case 'r':
        randomCard();
        break;
      case 't':
        turnDeck();
        break;
      case ' ':
        flipCard();
        break;
      case 'Escape':
        closeCardView();
        break;
      default:
        break;
    }
  };

  const handleForwardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    nextCard();
  };

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    previousCard();
  };

  const handleCardOpenClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    let deckId = (e.target as HTMLElement).id;
    let cards = await fetchCards(deckId);
    await setState({
      ...state,
      deckViewOn: false,
      activeDeck: state.decks.find((d) => d.id === Number(deckId)),
      cards,
      activeCard: cards[0],
    });
  };

  const handleCardCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeCardView();
  };

  const handleDeckViewExited = () => {
    setState({ ...state, cardViewOn: true });
  };

  const handleCardViewExited = () => {
    setState({ ...state, deckViewOn: true });
  };

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <div className="Content" tabIndex={0}>
        <Overview
          showRed={state.cardViewOn}
          showBlue={state.deckViewOn}
          onCardExitClick={handleCardCloseClick}
        />
        <DeckView
          state={state}
          onExited={handleDeckViewExited}
          onClick={handleCardOpenClick}
        />
        <CardView
          state={state}
          onExited={handleCardViewExited}
          onBackClick={handleBackClick}
          onForwardClick={handleForwardClick}
        />
      </div>
    </div>
  );
}

export default App;
