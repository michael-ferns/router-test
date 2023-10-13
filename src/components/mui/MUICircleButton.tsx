import React from 'react';
import MUIIcon, { MUIIconProps } from './MUIIcon';
import { theme } from '../../styles/theme/theme';
import { CircleButton } from './styles';

interface MUICircleButtonProps extends MUIIconProps {
  onClick?: () => void;
}

const MUICircleButton: React.FC<MUICircleButtonProps> = ({
  iconName,
  iconStyle,
  onClick,
}) => {
  const defaultIconStyle: React.CSSProperties = {
    color: theme.colors.grey, // default grey color
    ...iconStyle,
  };

  return (
    <CircleButton onClick={onClick}>
      <MUIIcon iconName={iconName} iconStyle={defaultIconStyle} />
    </CircleButton>
  );
};

export default MUICircleButton;
