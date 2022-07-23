import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: column;

  margin-top: 30vw;
`;

export const Input = styled.input`
  width: 60vw;
  height: 35px;

  margin: 15px;

  border-radius: 10px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  background-color: ${ props => props.background };

  width: 25vw;
  height: 35px;

  border-radius: 8px;
`;

export const P = styled.p`
  color: white;

  font-size: 16px;
  font-weight: bolder;
`;

export const ButtonContent = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;
`;

export const Button = styled.button`
  width: 45vw;
  height: 30px;

  border: none;
  border-radius: 10px;

  margin: 10px;
  margin-top: 10vh;

  color: white;
  font-size: 16px;
  font-weight: bolder;

  background-color: #000;

`;