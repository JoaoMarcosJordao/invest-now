import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';

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
      <table>
        <thead>
          <tr>
            <td>Ação</td>
            <td>Qtde</td>
            <td>Valor (R$)</td>
          </tr>
        </thead>
        <tbody>
          {tradeAction.map((action) => (
            <tr key={action.id}>
              <td>{action.title}</td>
              <td>{action.amount}</td>
              <td>{action.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label>
          Comprar:
          <input
            onChange={({ target }) => quantityHandler(target.value)}
            type='number'
            placeholder='Quantidade'
          />
        </label>
      </div>

      <div>
        <label>
          Vender:
          <input
            placeholder='Quantidade'
            type='number'
            onChange={({ target }) => quantityHandler(target.value)}
          />
        </label>
      </div>

      <button
        onClick={() => returnBtn()}
      >Voltar</button>
      <button
        onClick={() => confirmBtn()}
      >Confirmar</button>

      {
        redirect && <Redirect push to='/actions' />
      }

    </>
  )
}

export default BuyOrSell;