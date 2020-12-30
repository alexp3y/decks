import React from 'react';
import { NavLeft } from './CardDisplay/NavLeft';
import { NavRight } from './CardDisplay/NavRight';
import { Notecard } from './CardDisplay/Notecard';

interface Props {}

export const CardDisplay: React.FC<Props> = () => {
  return (
    <div className="CardDisplay">
      <NavLeft />
      <Notecard />
      <NavRight />
    </div>
  );
};
