import colors from './colors';
import spacing from './spacing';

export interface CustomTheme {
  colors: typeof colors;
  spacing: typeof spacing;
}

export const theme: CustomTheme = {
  colors,
  spacing,
};
