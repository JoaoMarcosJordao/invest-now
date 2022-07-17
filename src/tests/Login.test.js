import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithRouter from './renderWithRouter';

describe('Testando a página de Login', () => {
  it ('Verifica se na página de Login, possui o input para Email', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const inputEmail = screen.getByTestId('input-email');

    expect(inputEmail).toBeInTheDocument();
  });

  it ('Verifica se na página de Login, possui o input para a Senha', () => {
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);

    const inputPassowrd = screen.getByTestId('input-password');

    expect(inputPassowrd).toBeInTheDocument();
  });

  it ('Verifica se na página de Login, possui o botao "Acessar"', () => {
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);

    const acessBtn = screen.getByTestId('acess-btn')

    expect(acessBtn).toBeInTheDocument();
  });

  it ('Verifica se ao clicar no botao de acessar, vai para a página actions', () => {
    const { history } = renderWithRouter(<App />)

    const acessBtn = screen.getByRole('button')

    userEvent.click(acessBtn);

    history.push('/actions')

    expect(history.location.pathname).toBe('/actions');
  })
});