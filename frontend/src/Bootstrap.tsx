import { CssBaseline, ThemeProvider } from '@mui/material';
import { amber, grey, lightBlue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Bootstrap() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: lightBlue,
                secondary: red,
                divider: amber[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                background: {
                  default: grey[100],
                },
              }
            : {
                // palette values for dark mode
                primary: lightBlue,
                secondary: red,
                background: {
                  // default: grey[800],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
