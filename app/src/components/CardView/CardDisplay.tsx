import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { NavButton } from './CardDisplay/NavButton';
import { BlankCard } from './CardDisplay/BlankCard';
import { Notecard } from './CardDisplay/Notecard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { AppState, Command, CommandHandler } from '../../types';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const CardDisplay: React.FC<Props> = ({ state, onCommand }) => {
  const onClickBack = () => {
    onCommand(Command.PREV_CARD, {});
  };
  const onClickForward = () => {
    onCommand(Command.NEXT_CARD, {});
  };
  return (
    <div style={styles}>
      <NavButton>
        <ArrowBackIosIcon style={iconStyles.left} onClick={onClickBack} />
      </NavButton>
      {state.activeCard ? (
        <Notecard state={state} onCommand={onCommand} />
      ) : (
        <BlankCard state={state} />
      )}
      <NavButton>
        <ArrowForwardIosIcon
          style={iconStyles.right}
          onClick={onClickForward}
        />
      </NavButton>
    </div>
  );
};

const styles: CSSProperties = {
  height: '50vh',
  maxHeight: '300px',
  marginTop: 'var(--overview-height)',
  paddingTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
};

const iconStyles = {
  left: {
    width: '25vh',
    maxWidth: '146px',
    height: '20vh',
    maxHeight: '126px',
  },
  right: {
    width: '20vh',
    maxWidth: '116px',
    height: '20vh',
    maxHeight: '126px',
  },
};
