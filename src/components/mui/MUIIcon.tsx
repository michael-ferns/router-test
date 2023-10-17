import * as icons from '@mui/icons-material';

export type IconName = keyof typeof icons;

interface MUIIconProps {
  iconName: IconName;
}

const MUIIcon: React.FC<MUIIconProps> = ({ iconName }) => {
  const Icon = icons[iconName];

  return <Icon />;
};

export default MUIIcon;
