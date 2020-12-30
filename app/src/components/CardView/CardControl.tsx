import React from 'react';
import { ControlButton } from './CardControl/ControlButton';
import { Counter } from './CardControl/Counter';

interface Props {}

export const CardControl: React.FC<Props> = () => {
  return (
    <div className="CardControl">
      <ControlButton action="reverse" />
      <ControlButton action="starred" />
      <Counter />
      <ControlButton action="add" />
      <ControlButton action="edit" />
    </div>
  );
};
