import { Box } from '@material-ui/core';
import React from 'react';
import { ControlButton } from './ControlPanel/ControlButton';
import { Counter } from './ControlPanel/Counter';
import LoopIcon from '@material-ui/icons/Loop';
import StarsIcon from '@material-ui/icons/Stars';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { AppState, Command, CommandHandler } from '../../../types';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const ControlPanel: React.FC<Props> = ({ state, onCommand }) => {
  const onReverseClick = () => {
    onCommand(Command.REVERSE_DECK, {});
  };
  const onStarredClick = () => {
    onCommand(Command.STAR_DECK, {});
  };
  const onAddClick = () => {
    onCommand(Command.ADD_CARD, {});
  };
  const onEditClick = () => {
    onCommand(Command.EDIT_CARD, {});
  };
  const onSaveClick = () => {
    onCommand(Command.SAVE_CARD, {});
  };
  const onDeleteClick = () => {
    onCommand(Command.DELETE_CARD, {});
  };
  return (
    <Box style={styles} boxShadow={3} borderRadius={5}>
      <ControlButton
        action="REVERSE"
        border={true}
        disabled={state.editMode}
        onClick={onReverseClick}
      >
        <LoopIcon style={getReverseIconStyles(state.deckReversed)} />
      </ControlButton>
      <ControlButton
        action="STARRED"
        border={false}
        disabled={state.editMode}
        onClick={onStarredClick}
      >
        <StarsIcon style={getStarredIconStyles(state.deckStarred)} />
      </ControlButton>
      <Counter state={state} />
      {state.editMode ? (
        <ControlButton
          action="DELETE"
          border={true}
          disabled={false}
          onClick={onDeleteClick}
        >
          <DeleteIcon style={iconStyles} />
        </ControlButton>
      ) : (
        <ControlButton
          action="ADD"
          border={true}
          disabled={false}
          onClick={onAddClick}
        >
          <AddCircleIcon style={iconStyles} />
        </ControlButton>
      )}
      {state.editMode ? (
        <ControlButton
          action="SAVE"
          border={false}
          disabled={false}
          onClick={onSaveClick}
        >
          <SaveIcon style={iconStyles} />
        </ControlButton>
      ) : (
        <ControlButton
          action="EDIT"
          border={false}
          disabled={false}
          onClick={onEditClick}
        >
          <EditIcon style={iconStyles} />
        </ControlButton>
      )}
    </Box>
  );
};

const styles = {
  display: 'flex',
  backgroundColor: 'var(--color-control-panel)',
  color: 'var(--color-bg)',
};

const iconStyles = {
  height: '45px',
  width: '45px',
};

const getReverseIconStyles = (reversed: boolean) =>
  reversed
    ? Object.assign(
        {
          fill: 'var(--color-red)',
        },
        iconStyles
      )
    : iconStyles;

const getStarredIconStyles = (reversed: boolean) =>
  reversed
    ? Object.assign(
        {
          fill: 'goldenrod',
        },
        iconStyles
      )
    : iconStyles;
