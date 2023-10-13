import styled from '../../styles/styled';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const DashboardTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const NavigationButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryBlueDark};
  }
`;

export const DashboardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const DashboardListTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const DashboardListContent = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DashboardListItem = styled.li`
  padding: 8px 12px;
  font-size: 18px;
  color: #555;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;
