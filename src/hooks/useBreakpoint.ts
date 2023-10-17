import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useBreakpoint = (key: Breakpoint): boolean => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(key));

  return isMobile;
};

export default useBreakpoint;
