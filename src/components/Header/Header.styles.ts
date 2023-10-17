import styled from '@emotion/styled';

export const HeaderContainer = styled('header')`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSection = styled('div')`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
