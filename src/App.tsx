// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Router from './routing/Router';
import theme from './theme';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
