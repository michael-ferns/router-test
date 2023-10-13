import styled from '../../styles/styled';

export const CircleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
