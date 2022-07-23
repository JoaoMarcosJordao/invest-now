import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 14;
  }
`;

export const Title = styled.h4`
  background-color: #838383;
  margin-bottom: 8px;

  width: 100vw;

  padding: 8px;

  color: white;

  font-size: 14px;
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  margin: 3vh;
`;

export const Table = styled.table`
  width: 100vw;

  padding: 5px;

`;

export const Td = styled.td`
  background-color: ${props => props.background ? props.background : ''};
  
  padding: 5px;

  border-radius: 5px;

  color: ${props => props.background === '#000000' ? 'white' : 'black'};

`;

export const Button = styled.button`
  background-color: ${props => props.background ? props.background : '#cccc'};

  width: 25px;
  height: 30px;

  border: none;

  margin: 2px;

  border-radius: 35px;

  font-weight: bolder;

  color: white;
`;