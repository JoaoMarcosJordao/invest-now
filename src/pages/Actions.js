import React, { useContext } from 'react';
import Header from '../components/Header';
import ActionsAvailable from '../components/ActionsAvailable';
import MyActions from '../components/MyActions';
import appContext from '../context/appContext';


function Actions() {
  const { myActions } = useContext(appContext);
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
    </>
  )
}
export default Actions;