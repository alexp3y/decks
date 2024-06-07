import { Button, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  disabled?: boolean;
  active?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
  onClick(): void;
}

export const ControlButton: React.FC<Props> = ({
  title,
  children,
  active,
  left,
  right,
  top,
  bottom,
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
        borderRadius: left
          ? '20px 0 0 20px'
          : right
          ? '0 20px 20px 0'
          : top
          ? '20px 20px 0 0'
          : bottom
          ? '0 0 20px 20px'
          : 0,
        display: 'flex',
        flexDirection: 'column',
        width: '95px',
        p: 1,
        pb: bottom ? 1.5 : 1,
        pt: top ? 1.5 : 1,
        gap: 0.5,
        // '&.MuiButton-text': { color: 'green' },
      }}
      color={active ? 'secondary' : 'primary'}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
      <Typography sx={{ fontSize: '12px' }} variant="button">
        {title}
      </Typography>
    </Button>
  );
};
