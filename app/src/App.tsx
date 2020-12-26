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
  });

  useEffect(() => {
    axios.get('http://localhost:8080/users/1').then((res) => {
      state.user = res.data;
      setState({
        ...state,
        user: res.data,
      });
    });
  }, []);

  const handleDeckOpenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setState({ ...state, deckViewOn: false });
  };

  const handleDeckViewExit = () => {
    setState({ ...state, cardViewOn: true });
  };

  const handleCardCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setState({ ...state, cardViewOn: false });
  };

  const handleCardViewExit = () => {
    setState({ ...state, deckViewOn: true });
  };

  return (
    <div className="App">
      <div className="Content">
        <Overview
          showRed={state.cardViewOn}
          showBlue={state.deckViewOn}
          onCardExitClick={handleCardCloseClick}
        />
        <DeckView
          show={state.deckViewOn}
          onExit={handleDeckViewExit}
          onClick={handleDeckOpenClick}
        />
        <CardView show={state.cardViewOn} onExit={handleCardViewExit} />
      </div>
    </div>
  );
}

export default App;
