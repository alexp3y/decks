import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';

interface Props {}

export const Bar: React.FC<Props> = () => {
  return (
    <AppBar className="Bar" position="static">
      <Toolbar className="Bar" variant="regular">
        <div className="Logo">
          <h3>DECKS</h3>
        </div>
      </Toolbar>
    </AppBar>
  );
};
