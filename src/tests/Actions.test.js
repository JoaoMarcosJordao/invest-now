import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Actions from '../pages/Actions';
// import App from '../App';
import Provider from '../context/Provider';

describe('Testando a página de Actions', () => {
  it('Verifica se na página de actions possui o heading escrito "Minhas ações:"', () => {
    renderWithRouter(
      <Provider>
        <Actions />
      </Provider>
    )

    const headingElement = screen.getByRole('heading', {
      level: 4,
      name: /Minhas ações:/i
    });

    expect(headingElement).toBeInTheDocument();
  });

  it('Verifica se na página de actions possui o heading "Disponíveis para investir:"', () => {
    renderWithRouter(
      <Provider>
        <Actions />
      </Provider>
    )

    const headingElement = screen.getByRole('heading', {
      level: 4,
      name: /Disponíveis para investir:/i
    });

    expect(headingElement).toBeInTheDocument();
  })

  it('Verifica se todas as ações estão disponiveis para a compra', () => {
    renderWithRouter(
      <Provider>
        <Actions />
      </Provider>
    )

    const actionElement = screen.getAllByTestId('buy-btn');

    expect(actionElement).toHaveLength(11);
  })

  it('Verifica se na tela possui o botão "Déposito/Retirada"', () => {
    renderWithRouter(
      <Provider>
        <Actions />
      </Provider>
    )

    const btn = screen.getByRole('button', { name: /Depósito/i });

    expect(btn).toBeInTheDocument();
  })
});