import React, { useState } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';

function Deposit() {
  const [balanceAccount, setBalanceAccount] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const redirectToDepositPage = () => {
    setRedirect(true);
  }

  const handleChange = (value) => {
    setBalanceAccount(value);
  }

  const showBalanceAccount = () => {
    return (
      <span>Saldo em Conta: R${balanceAccount}</span>
    )
  }

  const confirmBtn = () => {
    localStorage.setItem('UserBalance', balanceAccount);

    alert('Depósito feito com sucesso.')
  }

  return (
    <>
      <Header />

      <div>
        {showBalanceAccount()}
      </div>

      <button>Depósito</button>

      <button
        disabled={true}
      >Retirada</button>

      <div>
        <input
          data-testid='input-deposit'
          placeholder='Informe o valor'
          type='number'
          onChange={({ target }) => handleChange(target.value)}
        />
      </div>

      <div>
        <button
          onClick={() => redirectToDepositPage()}
        >Voltar
        </button>

        <button
          onClick={() => confirmBtn()}
        >Confirmar</button>
      </div>
      {
        redirect && <Redirect push to='/actions' />
      }
    </>
  )
}

export default Deposit;