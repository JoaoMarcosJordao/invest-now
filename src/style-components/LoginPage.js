import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`

export const LoginContainer = styled.section`
  @media(max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;

    background-color: #363636;

    height: 100vh;
  }
`;

export const LoginDiv = styled.div`
  @media(max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;

    background-color: #4F4F4F;

    border-radius: 10px;
  

    padding: 5vh;

  }
`;

export const Input = styled.input`
  @media (max-width: 500px) {
    margin-bottom: 5vh;
    padding: 10px;

    height: 25px;
    width: 30vh;

    border-radius: 5px;
  }
`;

export const Button = styled.button`
  @media (max-width: 500px) {
    padding: 10px;

    height: 45px;
    width: 30vh;

    border: none;
    border-radius: 5px;

    background-color: #009900;

    color: black;
    font-size: large;
    font-weight: bolder;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  color: red;
`;

export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  color: #fff;

  font-size: 65px;

  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;

  margin-bottom: 30px;
`;