import styledBase from '@emotion/styled';
import { CustomTheme } from './theme/theme';

const styled = styledBase as typeof styledBase;

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {} // This is the correct way
}

export default styled;
