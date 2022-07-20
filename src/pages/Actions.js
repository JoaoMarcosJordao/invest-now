import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import ActionsAvailable from '../components/ActionsAvailable';
import MyActions from '../components/MyActions';
import appContext from '../context/appContext';
import { Redirect } from 'react-router-dom';


function Actions() {
  const { myActions } = useContext(appContext);
  const [redirect, setRedirect] = useState(false);

  const redirectToDepositPage = () => {
    setRedirect(true);
  }

  return (
    <>
      <Header />
      <article>
        <h4>Minhas ações:</h4>
        {
          myActions.length === 0
            ? <span>Você ainda nâo possui ações.</span>
            : <MyActions />
        }
      </article>
      <ActionsAvailable />
      <div>
        <button
          onClick={redirectToDepositPage}
        >Depósito/Retirada</button>
      </div>
      {
        redirect && <Redirect push to='/deposit' />
      }
    </>
  )
}
export default Actions;