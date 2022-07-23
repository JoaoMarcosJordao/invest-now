import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import ActionsAvailable from '../components/ActionsAvailable';
import MyActions from '../components/MyActions';
import appContext from '../context/appContext';
import { Redirect } from 'react-router-dom';

import {
  Article,
  Title,
  Button,
  ButtonContent,
} from '../style-components/ActionsPage';


function Actions() {
  const { myActions } = useContext(appContext);
  const [redirect, setRedirect] = useState(false);

  const redirectToDepositPage = () => {
    setRedirect(true);
  }

  return (
    <>
      <Header />
      <Article>
        <Title>Minhas ações:</Title>
        {
          myActions.length === 0
            ? <span>Você ainda nâo possui ações.</span>
            : <MyActions />
        }
      </Article>
      <ActionsAvailable />
      <ButtonContent>
        <Button
          onClick={redirectToDepositPage}
        >Depósito/Retirada</Button>
      </ButtonContent>
      {
        redirect && <Redirect push to='/deposit' />
      }
    </>
  )
}
export default Actions;