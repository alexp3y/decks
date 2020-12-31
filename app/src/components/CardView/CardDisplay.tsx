import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { NavButton } from './CardDisplay/NavButton';
import { Notecard } from './CardDisplay/Notecard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface Props {}

export const CardDisplay: React.FC<Props> = () => {
  return (
    <div style={styles}>
      <NavButton>
        <ArrowBackIosIcon style={iconStyles.left} />
      </NavButton>
      <Notecard />
      <NavButton>
        <ArrowForwardIosIcon style={iconStyles.right} />
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
