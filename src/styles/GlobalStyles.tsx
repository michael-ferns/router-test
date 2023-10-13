import { Global, css } from '@emotion/react';

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
      }
    `}
  />
);

export default GlobalStyles;
