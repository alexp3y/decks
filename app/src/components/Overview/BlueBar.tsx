import { AppBar, Slide, Toolbar } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';

interface Props {
  show: boolean;
}

export const BlueBar: React.FC<Props> = ({ show }) => {
  return (
    <Slide in={show} direction={'left'} timeout={500} unmountOnExit={true}>
      {/* <Collapse in={show} timeout={500}> */}
      <AppBar position="static">
        <Toolbar className="Bar-blue" variant="regular">
          <Logo />
        </Toolbar>
      </AppBar>
      {/* </Collapse> */}
    </Slide>
  );
};
