import React, { useEffect, useState } from 'react';
import './App.css';
import { executeCommand, handleKeyCommand } from './commandFunctions';
import { CardView } from './components/CardView';
import { DeckView } from './components/DeckView';
import { Overview } from './components/Overview';
import { INITIAL_APP_STATE } from './constants';
import { AppState, Command, CommandHandler } from './types';

function App() {
  const [state, setState] = useState<AppState>(INITIAL_APP_STATE);

  useEffect(() => {
    async function init() {
      let updatedState = await executeCommand(Command.INITIALIZE_APP, state, {
        target: 1,
      });
      setState({ ...updatedState });
    }
    init();
  }, []);

  const onKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    let updatedState = await handleKeyCommand(e.key, state);
    setState({ ...updatedState });
  };

  const onCommand: CommandHandler = async (command, data) => {
    let updatedState = await executeCommand(command, state, data);
    setState({ ...updatedState });
  };

  return (
    <div
      className="App"
      onKeyDown={onKeyDown}
      tabIndex={0}
      style={
        state.darkMode
          ? { backgroundColor: 'var(--color-bg)' }
          : { backgroundColor: 'var(--color-bg-light)' }
      }
    >
      <Overview state={state} onCommand={onCommand} />
      <DeckView state={state} onCommand={onCommand} />
      <CardView state={state} onCommand={onCommand} />
    </div>
  );
}

export default App;
