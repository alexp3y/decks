import { AppBar, Button, Slide, Toolbar } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';

interface Props {
  show: boolean;
}

export const BlueBar: React.FC<Props> = ({ show }) => {
  return (
    <Slide in={show} direction={'left'} timeout={500} unmountOnExit={true}>
      <AppBar position="static" elevation={3}>
        <Toolbar className="Bar-blue" variant="regular">
          <Logo />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
