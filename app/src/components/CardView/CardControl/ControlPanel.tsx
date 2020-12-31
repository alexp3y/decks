import { Box } from '@material-ui/core';
import React from 'react';
import { ControlButton } from './ControlPanel/ControlButton';
import { Counter } from './ControlPanel/Counter';
import LoopIcon from '@material-ui/icons/Loop';
import StarsIcon from '@material-ui/icons/Stars';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

interface Props {}

export const ControlPanel: React.FC<Props> = () => {
  return (
    <Box style={styles} boxShadow={3} borderRadius={5}>
      <ControlButton action="REVERSE" border={true}>
        <LoopIcon style={iconStyles} />
      </ControlButton>
      <ControlButton action="STARRED" border={false}>
        <StarsIcon style={iconStyles} />
      </ControlButton>
      <Counter />
      <ControlButton action="ADD" border={true}>
        <AddCircleIcon style={iconStyles} />
      </ControlButton>
      <ControlButton action="EDIT" border={false}>
        <EditIcon style={iconStyles} />
      </ControlButton>
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
