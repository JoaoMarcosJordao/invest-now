import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`

export const Headers = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #414141;
  height: 10vh;

  color: #ffff;
`;