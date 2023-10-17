import styled from '@emotion/styled';

interface AppLayoutContentContainerProps {
  showFooter: boolean;
}

export const AppLayoutContainer = styled('main')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #f0f3f7;
`;

export const AppLayoutContentContainer = styled(
  'div',
)<AppLayoutContentContainerProps>`
  flex: 1;
  display: flex;
  padding: ${(props) =>
    props.showFooter
      ? `0 ${props.theme.custom.spacing.defaultGutter}`
      : `0 ${`${props.theme.custom.spacing.defaultGutter} `.repeat(3).trim()}`};
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.custom.spacing.defaultGutter};
  }
`;

export const AppLayoutContentArea = styled('section')`
  flex: 1;
  display: flex;
  background-color: white;
  padding: ${(props) => props.theme.custom.spacing.defaultGutter};
  border-radius: 8px;
`;
