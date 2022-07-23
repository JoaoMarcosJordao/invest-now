import React, { useState } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';

import { BalanceAccount, Button, Input, InputContent, ButtonDepWith } from '../style-components/DepositWithdrawPage';

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

      <BalanceAccount>
        {showBalanceAccount()}
      </BalanceAccount>

      <ButtonDepWith background='#228B22'>Depósito</ButtonDepWith>

      <ButtonDepWith background='#DCDCDC'
        disabled={true}
      >Retirada</ButtonDepWith>

      <InputContent>
        <Input
          data-testid='input-deposit'
          placeholder='Informe o valor'
          type='number'
          onChange={({ target }) => handleChange(target.value)}
        />
      </InputContent>

      <div>
        <Button
          onClick={() => redirectToDepositPage()}
        >Voltar
        </Button>

        <Button
          onClick={() => confirmBtn()}
        >Confirmar</Button>
      </div>
      {
        redirect && <Redirect push to='/actions' />
      }
    </>
  )
}

export default Deposit;