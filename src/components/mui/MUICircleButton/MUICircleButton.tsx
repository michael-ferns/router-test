import MUIIcon, { IconName } from '../MUIIcon';
import { CircleButton } from './MUICircleButton.styles';

interface MUICircleButtonProps {
  iconName: IconName;
  handleClick: () => void;
}

const MUICircleButton: React.FC<MUICircleButtonProps> = ({
  iconName,
  handleClick,
}) => {
  return (
    <CircleButton onClick={handleClick}>
      <MUIIcon iconName={iconName} />{' '}
    </CircleButton>
  );
};

export default MUICircleButton;
