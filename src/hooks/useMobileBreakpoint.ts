import { useTheme } from '@mui/material/styles';

export const useMobileBreakpoint = (): boolean => {
  const theme = useTheme();

  const isMobile: boolean = window.innerWidth <= theme.breakpoints.values.sm;

  return isMobile;
};
