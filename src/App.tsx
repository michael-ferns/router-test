// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import Router from './routing/Router';
import { AuthProvider } from './auth/AuthContext';
import { theme } from './styles/theme/theme';
import GlobalStyles from './styles/GlobalStyles';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
