import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import BuyOrSell from '../pages/BuyOrSell';
import Provider from '../context/Provider';
import userEvent from '@testing-library/user-event';
// import actions from '../actions';

describe('Testando a página de Compra e venda', () => {
  it ('Verifica se a página contem o input para inserir o valor da compra', () => {

    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const inputBuy = screen.getByTestId('input-quantity-buy');

    expect(inputBuy).toBeInTheDocument();
  });

  it('A pessoa deve conseguir escrever a quantidade na compra', () => {
    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const inputBuy = screen.getByTestId('input-quantity-buy');

    userEvent.type(inputBuy, '10');
  });

  it ('Verifica se a página contem o input para inserir o valor da venda', () => {

    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const inputSell = screen.getByTestId('input-quantity-sell');

    expect(inputSell).toBeInTheDocument();
  });

  it('A pessoa deve conseguir escrever a quantidade na venda', () => {
    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const inputSell = screen.getByTestId('input-quantity-sell');

    userEvent.type(inputSell, '10');
  });

  it('Verifica se o botao de voltar está na tela', () => {
    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const returnBtn = screen.getByTestId('return-btn');

    expect(returnBtn).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botao de voltar, vai para a página de actions', () => {
    const {history} = renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const returnBtn = screen.getByTestId('return-btn');

    userEvent.click(returnBtn);

    expect(history.location.pathname).toBe('/actions');
  });

  it('Verifica se o botao de confirmar está na tela', () => {
    renderWithRouter(
      <Provider>
        <BuyOrSell />
      </Provider>
    )

    const confirmBtn = screen.getByTestId('confirm-btn');

    expect(confirmBtn).toBeInTheDocument();
  });
});