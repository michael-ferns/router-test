import styled from '../../styles/styled';

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const RoutesContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 20px ${(props) => props.theme.spacing.verticalGutterPadding};
  background-color: ${(props) => props.theme.colors.routesContainerBackground};
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const SpinnerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 10;
`;
