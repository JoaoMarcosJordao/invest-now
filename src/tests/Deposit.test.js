import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Deposit from '../pages/Deposit';
import userEvent from '@testing-library/user-event';

describe('Testando a página de Deposit', () => {
  it ('Verifica se na página de depósito, tem o elemento Saldo em Conta', () => {
    renderWithRouter(<Deposit />)

    const AccBalance = screen.getByText(/Saldo em Conta/i);

    expect(AccBalance).toBeInTheDocument();
  });

  it ('Verifica se na página de depósito, tem o botão Depósito', () => {
    renderWithRouter(<Deposit />)

    const DepositBtn = screen.getByRole('button', { name: 'Depósito' });

    expect(DepositBtn).toBeInTheDocument();
  });

  it ('Verifica se na página de depósito, tem o elemento com o placeholder Informe o valor', () => {
    renderWithRouter(<Deposit />)

    const informValue = screen.getByPlaceholderText('Informe o valor');

    expect(informValue).toBeInTheDocument();
  });

  it ('Verifica se na página de depósito, tem o botão Voltar', () => {
    renderWithRouter(<Deposit />)

    const returnBtn = screen.getByRole('button', { name: 'Voltar' });

    expect(returnBtn).toBeInTheDocument();
  });

  it ('Verifica se ao clicar no botão Voltar, vai para página /actions', () => {
    const { history } = renderWithRouter(<Deposit />)

    const returnBtn = screen.getByRole('button', { name: 'Voltar' });

    userEvent.click(returnBtn);

    history.push('/actions')

    expect(history.location.pathname).toBe('/actions');
  });

  it ('Verifica se na página de depósito, tem o botão Confirmar', () => {
    renderWithRouter(<Deposit />)

    const confirmBtn = screen.getByRole('button', { name: 'Confirmar' });

    expect(confirmBtn).toBeInTheDocument();
  });

  it ('Verifica se ao clicar no botão de confirmar, o valor é salvo no localStorage', () => {
    renderWithRouter(<Deposit />)

    const inputDeposit = screen.getByTestId('input-deposit');
    const confirmBtn = screen.getByRole('button', { name: 'Confirmar' });

    userEvent.type(inputDeposit, '10')

    userEvent.click(confirmBtn);

    expect(JSON.parse(localStorage.getItem('UserBalance'))).toBe(10);

  });
});