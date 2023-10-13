import styled from '../../styles/styled';

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

export const HeaderSection = styled.section``;
