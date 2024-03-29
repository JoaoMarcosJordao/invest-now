import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('Testando a página de Login', () => {
  it ('Verifica se na página de Login, possui o input para Email', () => {
    renderWithRouter(<App />)

    const inputEmail = screen.getByTestId('input-email');

    expect(inputEmail).toBeInTheDocument();
  });

  it ('Verifica se na página de Login, possui o input para a Senha', () => {
    renderWithRouter(<App />)

    const inputPassowrd = screen.getByTestId('input-password');

    expect(inputPassowrd).toBeInTheDocument();
  });

  it ('Verifica se na página de Login, possui o botao "Acessar"', () => {
    renderWithRouter(<App />)

    const acessBtn = screen.getByTestId('acess-btn')

    expect(acessBtn).toBeInTheDocument();
  });

  it('A pessoa deve conseguir escrever o email', () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId('input-email');
    userEvent.type(email, 'alguem@trybe.com');
  });

  it('4- A pessoa deve conseguir escrever a senha', () => {
    renderWithRouter(<App />);
    const password = screen.getByTestId('input-password');
    userEvent.type(password, '12345678');
  });

  it ('Verifica se ao clicar no botao de acessar, vai para a página actions', () => {
    const { history } = renderWithRouter(<App />)

    const acessBtn = screen.getByRole('button')

    userEvent.click(acessBtn);

    history.push('/actions')

    expect(history.location.pathname).toBe('/actions');
  })
});