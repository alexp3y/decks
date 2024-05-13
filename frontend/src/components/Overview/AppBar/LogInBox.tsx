import React from 'react';
import { LogInButton } from './LogInBox/LogInButton';
import { SignUpButton } from './LogInBox/SignUpButton';

interface Props {}

export const LogInBox: React.FC<Props> = () => {
  return (
    <div className="LogInBox">
      <SignUpButton />
      <LogInButton />
    </div>
  );
};
