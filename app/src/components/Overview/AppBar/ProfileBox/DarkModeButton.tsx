import React from 'react';
import { AppState, Command, CommandHandler } from '../../../../types';
import BrightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';

interface Props {
  state: AppState;
  onCommand: CommandHandler;
}

export const DarkModeButton: React.FC<Props> = ({ state, onCommand }) => {
  const onClick = () => {
    onCommand(Command.TOGGLE_DARK_MODE, {});
  };
  return (
    <IconButton onClick={onClick} style={buttonStyles}>
      {state.darkMode ? (
        <DarkIcon style={iconStyles} />
      ) : (
        <BrightIcon style={iconStyles} />
      )}
    </IconButton>
  );
};

const buttonStyles = {
  marginRight: '20px',
};

const iconStyles = {
  height: '30px',
  width: '30px',
};
