import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { Logo } from './Logo';

interface Props {
  show: boolean;
  onClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const RedBarLogo: React.FC<Props> = ({ show, onClick }) => {
  return (
    <Slide in={show} direction={'left'} timeout={500} unmountOnExit={true}>
      <Box
        className="Bar-red-logo"
        width={1 / 5}
        boxShadow={3}
        borderRadius={1.5}
      >
        <Logo />
      </Box>
    </Slide>
  );
};
