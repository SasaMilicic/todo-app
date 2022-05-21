import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #444442;
  display: flex;
  justify-content: space-around;
  }
`;

export const StApp = styled.div`
  width: 700px;
  margin-top: 10%;

  h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 72px;
    color: white;
  }
`;
