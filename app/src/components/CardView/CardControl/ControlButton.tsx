import React from 'react';

interface Props {
  action: string;
}

export const ControlButton: React.FC<Props> = ({ action }) => {
  return <div className="ControlButton">{action}</div>;
};
