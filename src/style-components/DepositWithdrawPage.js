import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`

export const BalanceAccount = styled.div`
  @media(max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #C0C0C0;


  height: 40px;

  font-size: 16px;
  font-weight: bolder;

  color: #000;
  }
`;

export const ButtonDepWith = styled.button`
  @media(max-width: 500px) {
  width: 40vw;
  height: 40px;

  border: none;
  border-radius: 5px;

  margin: 10px;
  margin-top: 5vh;

  color: white;
  font-size: 16px;
  font-weight: bolder;

  background-color: ${props => props.background};
  }

`;

export const InputContent = styled.div`
  @media(max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export const Input = styled.input`
  width: 60vw;
  height: 35px;

  margin-top: 10vh;

  border-radius: 8px;
`;

export const Button = styled.button`
  width: 40vw;
  height: 30px;

  border: none;
  border-radius: 10px;

  margin: 10px;
  margin-top: 40vh;

  color: white;
  font-size: 16px;
  font-weight: bolder;

  background-color: #000;

`;