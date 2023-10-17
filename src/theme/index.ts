import { createTheme } from '@mui/material/styles';
import custom from './custom';

const theme = {
  custom,
};

export type AppTheme = typeof theme;
export default createTheme({
  ...theme,
});
