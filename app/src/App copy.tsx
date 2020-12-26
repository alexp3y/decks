import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { CardView } from './components/CardView';
// import { DeckView } from './components/DeckView';
// import { Overview } from './components/Overview';
// import { AppState, IDeck, StateUpdate } from './types';

// const deck: IDeck = {
//   cards: [],
// };

// function App() {
//   const [deckViewOn, setDeckView] = useState(true);
//   const [cardViewOn, setCardView] = useState(false);

//   const [state, setState] = useState<AppState>({
//     card: null,
//     activeIndex: 0,
//     cardFlipped: false,
//     deckReversed: false,
//   });

//   const updateState = (update: StateUpdate) => {
//     setState({
//       card: update.card !== undefined ? update.card : state.card,
//       activeIndex:
//         update.activeIndex !== undefined
//           ? update.activeIndex
//           : state.activeIndex,
//       cardFlipped:
//         update.cardFlipped !== undefined
//           ? update.cardFlipped
//           : state.cardFlipped,
//       deckReversed:
//         update.deckReversed !== undefined
//           ? update.deckReversed
//           : state.deckReversed,
//     });
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8080/cards').then((res) => {
//       deck.cards = res.data;
//       updateState({
//         card: deck.cards[0],
//       });
//     });
//   }, []);

//   const previousCard = () => {
//     if (state.activeIndex > 0) {
//       let prevIndex = state.activeIndex - 1;
//       updateState({
//         card: deck.cards[prevIndex],
//         activeIndex: prevIndex,
//         cardFlipped: false,
//       });
//     }
//   };

//   const nextCard = () => {
//     if (state.activeIndex < deck.cards.length - 1) {
//       let nextIndex = state.activeIndex + 1;
//       updateState({
//         card: deck.cards[nextIndex],
//         activeIndex: nextIndex,
//         cardFlipped: false,
//       });
//     }
//   };

//   const randomCard = () => {
//     let randomIndex = Math.floor(Math.random() * deck.cards.length);
//     updateState({
//       card: deck.cards[randomIndex],
//       activeIndex: randomIndex,
//       cardFlipped: false,
//     });
//   };

//   const turnDeck = () => {
//     updateState({
//       deckReversed: !state.deckReversed,
//     });
//   };

//   const flipCard = () => {
//     updateState({ cardFlipped: !state.cardFlipped });
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     switch (e.key) {
//       case 'ArrowRight':
//         nextCard();
//         break;
//       case 'ArrowLeft':
//         previousCard();
//         break;
//       case 'r':
//         randomCard();
//         break;
//       case 't':
//         turnDeck();
//         break;
//       case ' ':
//         flipCard();
//         break;
//       default:
//         break;
//     }
//   };

//   const handleForwardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     nextCard();
//   };

//   const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     previousCard();
//   };

//   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     setDeckView(false);
//   };

//   const onDeckViewExit = () => {
//     setCardView(true);
//   };

//   return (
//     <div className="App">
//       <div
//         tabIndex={0}
//         className="Content"
//         onClick={handleClick}
//         onKeyDown={handleKeyPress}
//       >
//         <Overview show={deckViewOn} />
//         <div className="Close-button" />
//         <DeckView show={deckViewOn} onExit={onDeckViewExit} />
//         <DeckView show={deckViewOn} onExit={onDeckViewExit} />
//         <DeckView show={deckViewOn} onExit={onDeckViewExit} />
//         <CardView show={cardViewOn} />
//         <CardView show={cardViewOn} />
//       </div>
//     </div>
//   );
// }

// export default App;
