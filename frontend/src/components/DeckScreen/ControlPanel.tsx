import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import { ControlButton } from './ControlPanel/ControlButton';

interface Props {
  onFirstCard: () => void;
  onLastCard: () => void;
  onPrevCard: () => void;
  onNextCard: () => void;
  onFlipCard: () => void;
  lastCard?: boolean;
  firstCard?: boolean;
}

export const ControlPanel: React.FC<Props> = ({
  onFirstCard,
  onLastCard,
  onPrevCard,
  onNextCard,
  onFlipCard,
  lastCard,
  firstCard,
}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: 'flex',
        boxShadow: 3,
        borderRadius: 5,
        mt: 1,
      }}
      variant={theme.palette.mode === 'dark' ? 'outlined' : 'elevation'}
    >
      <ControlButton
        left
        title="FIRST"
        disabled={firstCard}
        onClick={onFirstCard}
      >
        <FirstPageIcon style={iconStyles} />
      </ControlButton>
      <ControlButton title="PREV" disabled={firstCard} onClick={onPrevCard}>
        <ArrowBackIcon style={iconStyles} />
      </ControlButton>
      <ControlButton title="FLIP" onClick={onFlipCard}>
        <FlipCameraAndroidIcon style={iconStyles} />
      </ControlButton>
      <ControlButton title="NEXT" disabled={lastCard} onClick={onNextCard}>
        <ArrowForwardIcon style={iconStyles} />
      </ControlButton>
      <ControlButton
        title="LAST"
        right
        disabled={lastCard}
        onClick={onLastCard}
      >
        <LastPageIcon style={iconStyles} />
      </ControlButton>
    </Paper>
  );
};

const iconStyles = {
  height: '42px',
  width: '42px',
};
