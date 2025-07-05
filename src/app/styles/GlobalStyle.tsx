import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          -webkit-touch-callout: none;
          user-select: none;
        }

        :root {
          --vh: 100%;
        }

        #root {
          margin: 0 auto;
          padding: 0;
        }

        body,
        html {
          overflow-x: hidden;
          margin: 0 auto;
          padding: 0;
          color: black;
        }

        button {
          cursor: pointer;
          padding: 0;
          margin: 0;
          background: none;
          border: none;

          &:hover {
            border: none;
            outline: none;
          }

          &:focus {
            border: none;
            outline: none;
          }
        }

        ::-webkit-scrollbar {
          display: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
