import { Button, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  border: boolean;
  disabled?: boolean;
  active?: boolean;
  left?: boolean;
  right?: boolean;
  children: ReactNode;
  onClick(): void;
}

export const ControlButton: React.FC<Props> = ({
  title,
  children,
  active,
  left,
  right,
  disabled,
  onClick,
}) => {
  const clickHandler = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <Button
      sx={{
        borderRadius: left ? '20px 0 0 20px' : right ? '0 20px 20px 0' : 0,
        display: 'flex',
        flexDirection: 'column',
        width: '114px',
        p: 1,
        gap: 0.5,
        // '&.MuiButton-text': { color: 'green' },
      }}
      color={active ? 'secondary' : 'primary'}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
      {title}
    </Button>
  );
};
