import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';

import { Table, Td } from '../style-components/ActionsAvailable';
import { InputContent, Input, Div, P, ButtonContent, Button } from '../style-components/BurOrSellPage';


function BuyOrSell() {
  const [redirect, setRedirect] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { tradeAction, myActions } = useContext(appContext);

  const returnBtn = () => {
    setRedirect(true);
  }

  const quantityHandler = (value) => {
    setQuantity(value);
  }

  const confirmBtn = () => {

    const action = {
      title: tradeAction[0].title,
      quantity,
      price: tradeAction[0].price
    }

    myActions.push(action);

  }

  return (
    <>
      <Header />
      <Table>
        <thead>
          <tr>
            <Td background='#DCDCDC'>Ação</Td>
            <Td background='#DCDCDC'>Qtde</Td>
            <Td background='#DCDCDC'>Valor (R$)</Td>
          </tr>
        </thead>
        <tbody>
          {tradeAction.map((action) => (
            <tr key={action.title}>
              <Td background='#DAA520'>{action.title}</Td>
              <Td background='#C0C0C0'>{action.amount}</Td>
              <Td background='#000000'>{action.price}</Td>
            </tr>
          ))}
        </tbody>
      </Table>


      <InputContent>
        <Div background='#4169E1'>
          <P>Comprar:</P>
        </Div>
        <Input
          data-testid='input-quantity-buy'
          onChange={({ target }) => quantityHandler(target.value)}
          type='number'
          placeholder='Quantidade'
        />
        <Div background='#228B22'>
          <P>Vender:</P>
        </Div>
        <Input
          data-testid='input-quantity-sell'
          placeholder='Quantidade'
          type='number'
          onChange={({ target }) => quantityHandler(target.value)}
        />
      </InputContent>

      <ButtonContent>
        <Button
          data-testid='return-btn'
          onClick={() => returnBtn()}
        >Voltar</Button>
        <Button
          data-testid='confirm-btn'
          onClick={() => confirmBtn()}
        >Confirmar</Button>
      </ButtonContent>

      {
        redirect && <Redirect push to='/actions' />
      }

    </>
  )
}

export default BuyOrSell;