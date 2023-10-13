import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { RootState } from '../../redux/store';
import Header from '../Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { AppContainer, RoutesContainer, SpinnerOverlay } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const isLoading = useSelector((state: RootState) => state.loading);

  return (
    <AppContainer>
      <Header />
      <Sidebar />
      <RoutesContainer>
        {children}
        {isLoading && (
          <SpinnerOverlay>
            <CircularProgress color="inherit" />
          </SpinnerOverlay>
        )}
      </RoutesContainer>
    </AppContainer>
  );
};

export default Container;
