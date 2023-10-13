import React from 'react';
import {
  DashboardListContainer,
  DashboardListTitle,
  DashboardListContent,
  DashboardListItem,
} from './styles';

const DashboardList: React.FC = () => {
  return (
    <DashboardListContainer>
      <DashboardListTitle>Dashboard List</DashboardListTitle>
      <DashboardListContent>
        <DashboardListItem>Item #1</DashboardListItem>
        <DashboardListItem>Item #2</DashboardListItem>
        <DashboardListItem>Item #3</DashboardListItem>
      </DashboardListContent>
    </DashboardListContainer>
  );
};

export default DashboardList;
