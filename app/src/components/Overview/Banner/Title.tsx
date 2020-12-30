import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { AppState } from '../../../types';

interface Props {
  state: AppState;
}

export const Title: React.FC<Props> = ({ state }) => {
  return (
    <div style={styles}>
      <p style={stylesText}>{state.activeDeck!.name}</p>
    </div>
  );
};

const styles = {
  fontSize: '35px',
  marginLeft: '10px',
  marginRight: '6px',
  display: 'flex',
  alignItems: 'center',
};

const stylesText: CSSProperties = {
  height: '35px',
  wordBreak: 'break-all',
  paddingBottom: '10px',
};
