import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  /* ===== Media Queries ===== */ 
  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }

    @media (max-width: 360px) {
        font-size: 81.25%; // 13px
    }

  }
`;
