import styled from '@emotion/styled';

export const FullScreenLayoutContainer = styled('main')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.custom.colors.backgroundGrey};
`;
