import React from 'react';
import * as Icons from '@mui/icons-material';

export type IconName = keyof typeof Icons;

export interface MUIIconProps {
  iconName: IconName;
  iconStyle?: React.CSSProperties;
}

const MUIIcon: React.FC<MUIIconProps> = ({ iconName, iconStyle }) => {
  const Icon = Icons[iconName];

  if (!Icon) {
    console.warn(`Icon with key "${iconName}" not found in MUI icons library.`);
    return null;
  }

  return <Icon style={iconStyle} />;
};

export default MUIIcon;
