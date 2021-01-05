import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import React from 'react';

interface Props {
  onClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const CloseButton: React.FC<Props> = ({ onClick }) => {
  return (
    <IconButton className="CloseButton" href="" size="medium" onClick={onClick}>
      <CloseIcon className="CloseButton-icon" fontSize="large" />
    </IconButton>
  );
};
