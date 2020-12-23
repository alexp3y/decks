import React from 'react';

interface Props {
  index: number;
  size: number;
}

export const Counter: React.FC<Props> = ({ index, size }) => {
  return (
    <h5>
      {index + 1} of {size}
    </h5>
  );
};
