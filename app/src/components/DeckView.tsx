import { Slide } from '@material-ui/core';
import React, { CSSProperties } from 'react';
import { AppState, Command, CommandHandler } from '../types';
import { BlankDeck } from './DeckView/BlankDeck';
import { Deck } from './DeckView/Deck';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const DeckView: React.FC<Props> = ({ state, onCommand }) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = Number((e.target as HTMLElement).id);
    onCommand(Command.EXIT_DECK_VIEW, { target });
  };

  const onExited = () => {
    onCommand(Command.ENTER_CARD_VIEW, {});
  };

  return (
    <Slide
      onExited={onExited}
      direction="right"
      in={state.deckViewOn}
      timeout={500}
      unmountOnExit={true}
    >
      <div style={styles}>
        {state.decks!.map((deck) => {
          return <Deck deck={deck} onClick={onClick} />;
        })}
        <BlankDeck />
      </div>
    </Slide>
  );
};

const styles: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  alignContent: 'center',
};
