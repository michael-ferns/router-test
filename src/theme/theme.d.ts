import { AppTheme } from './index';

declare module '@mui/material/styles' {
  interface Theme extends AppTheme {}
  interface ThemeOptions extends AppTheme {}
}

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
