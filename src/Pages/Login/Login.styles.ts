import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const LoginContainer = styled('section')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCardContainer = styled('div')`
  width: 300px;
`;

export const LoginCard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const LoginTitle = styled('h1')`
  font-size: 20px;
`;

export const LoginButton = styled(Button)`
  margin-top: 15px;
`;
