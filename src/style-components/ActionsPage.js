import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  margin: 3vh;
`;

export const Title = styled.h4`
  background-color: #838383;
  margin-bottom: 8px;

  width: 100vw;

  padding: 8px;

  color: white;

  font-size: 14px;
`;

export const ButtonContent = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;
`;

export const Button = styled.button`
  width: 70vw;

  height: 35px;

  border: none;

  border-radius: 15px;

  background-color: black;

  color: white;
`;