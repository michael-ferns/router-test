import React from 'react';
import { SidebarItemConfig } from '../../../routing/types';
import styled from '../../../styles/styled';

interface SidebarListProps {
  items: SidebarItemConfig[];
}

interface SidebarListItemProps {
  item: SidebarItemConfig;
}

const SidebarListContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
  position: relative;
`;

const SidebarListItemContainer = styled.div``;

// const slideInFromRight = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// const slideOutToLeft = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const slideOutToRight = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(100%);
//   }
// `;

// const slideInFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// interface SidebarSubMenuItem {
//   key: number;
//   label: string;
// }

// export interface SidebarItem {
//   key: number;
//   label: string;
//   leadIcon: IconName;
//   subMenu?: SidebarSubMenuItem[];
// }

// interface SidebarListProps {
//   items: SidebarItem[];
// }

// interface SidebarListMenuProps {
//   isActive: boolean;
//   hasInteracted: boolean;
// }

// const SidebarListContainer = styled.div`
//   flex-grow: 1;
//   overflow: hidden;
//   position: relative;
// `;

// const SidebarListMainMenu = styled.div<SidebarListMenuProps>`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   transform: translateX(0);
//   animation: ${(props) => {
//     if (props.isActive && props.hasInteracted) {
//       return css`
//         ${slideOutToLeft} 0.3s forwards
//       `;
//     }
//     if (props.hasInteracted) {
//       return css`
//         ${slideInFromLeft} 0.3s forwards
//       `;
//     }
//     return 'none';
//   }};
// `;

// const SidebarListSubMenu = styled.div<SidebarListMenuProps>`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   transform: translateX(100%);
//   animation: ${(props) => {
//     if (props.isActive && props.hasInteracted) {
//       return css`
//         ${slideInFromRight} 0.3s forwards
//       `;
//     }
//     if (props.hasInteracted) {
//       return css`
//         ${slideOutToRight} 0.3s forwards
//       `;
//     }
//     return 'none';
//   }};
// `;

// const SubMenuTitle = styled.h2`
//   color: #6b747d;
//   font-size: 14px;
//   font-family: Inter;
//   font-style: normal;
//   padding: 12px;
//   text-transform: uppercase;
// `;

// const gradient = [
//   { key: 1, color: '#806BFF', offset: '7.05%' },
//   { key: 2, color: '#1362E2', offset: '40.12%' },
//   { key: 3, color: '#00BBFF', offset: '72.9%' },
//   { key: 4, color: '#A0E9A7', offset: '101.89%' },
// ];

// interface SidebarListItemProps {
//   label: string;
//   leadIcon?: MUIIconName;
//   applyLeadIconGradient?: boolean;
//   trailIcon?: MUIIconName;
//   onClick?: () => void;
// }

// const SidebarListItemContainer = styled.div`
//   display: flex;
//   justify-content: space-between; /* Aligns trailIcon to the right */
//   align-items: center;
//   border-radius: 8px;
//   padding: 12px;
//   user-select: none;
//   &:hover {
//     background-color: #f5f7f7;
//     color: #1362e2;
//   }
//   &:active {
//     background-color: #f0f3f7;
//   }
// `;

// const ListItemContent = styled.div`
//   display: flex;
//   align-items: center;
//   & > *:not(:last-child) {
//     margin-right: 10px;
//   }
// `;

// const ListItemLabel = styled.p``;

// const SidebarListItem: React.FC<SidebarListItemProps> = ({
//   label,
//   leadIcon,
//   applyLeadIconGradient = false,
//   trailIcon,
//   onClick,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <SidebarListItemContainer
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <ListItemContent>
//         {typeof leadIcon !== 'undefined' ? (
//           <MUIIcon
//             iconName={leadIcon}
//             gradientStops={
//               applyLeadIconGradient && isHovered ? gradient : undefined
//             }
//           />
//         ) : null}
//         <ListItemLabel>{label}</ListItemLabel>
//       </ListItemContent>
//       <ListItemContent>
//         {typeof trailIcon !== 'undefined' ? (
//           <MUIIcon iconName={trailIcon} />
//         ) : null}
//       </ListItemContent>
//     </SidebarListItemContainer>
//   );
// };

const SidebarListItem: React.FC<SidebarListItemProps> = ({ item }) => {
  return (
    <SidebarListItemContainer>{item.sidebarLabel}</SidebarListItemContainer>
  );
};

const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
  console.log(items);

  return (
    <SidebarListContainer>
      {items.map((item) => (
        <SidebarListItem item={item} />
      ))}
    </SidebarListContainer>
  );
};

export default SidebarList;
