import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeightIcon from '@mui/icons-material/Height';
import LoopIcon from '@mui/icons-material/Loop';
import Edit from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { ControlButton } from './ControlPanel/ControlButton';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  onPrevCard: () => void;
  onNextCard: () => void;
  onFlipCard: () => void;
  lastCard?: boolean;
  firstCard?: boolean;
}

export const ControlPanel: React.FC<Props> = ({
  onPrevCard,
  onNextCard,
  onFlipCard,
  lastCard,
  firstCard,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onReverseClick = () => {
    // onCommand(Command.REVERSE_DECK, {});
  };
  const onStarredClick = () => {
    // onCommand(Command.STAR_DECK, {});
  };
  const onEditClick = () => {
    navigate(`./edit`);
  };
  return (
    <Paper
      sx={{
        display: 'flex',
        boxShadow: 3,
        borderRadius: 5,
        mt: 2,
      }}
      variant={theme.palette.mode === 'dark' ? 'outlined' : 'elevation'}
    >
      <ControlButton title="Edit" left border={true} onClick={onEditClick}>
        <Edit style={iconStyles} />
      </ControlButton>
      <ControlButton title="REVERSE" border={true} onClick={onReverseClick}>
        <LoopIcon style={iconStyles} />
      </ControlButton>
      <ControlButton title="STARRED" border={false} onClick={onStarredClick}>
        <StarIcon style={iconStyles} />
      </ControlButton>
      <ControlButton title="FLIP" border={true} onClick={onFlipCard}>
        <HeightIcon style={iconStyles} />
      </ControlButton>
      <ControlButton
        title="PREV"
        border={true}
        disabled={firstCard}
        onClick={onPrevCard}
      >
        <ArrowBackIcon style={iconStyles} />
      </ControlButton>
      <ControlButton
        title="NEXT"
        right
        border={false}
        disabled={lastCard}
        onClick={onNextCard}
      >
        <ArrowForwardIcon style={iconStyles} />
      </ControlButton>
    </Paper>
  );
};

const iconStyles = {
  height: '42px',
  width: '42px',
};
