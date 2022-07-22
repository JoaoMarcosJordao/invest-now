import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../context/appContext';

function ActionsAvailable() {

  const [redirect, setRedirect] = useState(false);

  const { actions, setTradection } = useContext(appContext);

  const buyBtn = (target) => {

    const { name } = target;

    const filteredAction = actions.filter((action) => action.title === name);

    setTradection(filteredAction);

    setRedirect(true);
  };

  return (
    <>
      <article>
        <h4>Disponíveis para investir:</h4>
        <table>
          <thead>
            <tr>
              <td>Ação</td>
              <td>Qtde</td>
              <td>Valor (R$)</td>
              <td>Negociar</td>
            </tr>
          </thead>
          <tbody>
            {actions.map((action) => (
              <tr key={action.id}>
                <td>{action.title}</td>
                <td>{action.amount}</td>
                <td>{action.price}</td>
                <td>
                  <button
                    name={action.title}
                    data-testid='buy-btn'
                    onClick={({ target }) => buyBtn(target)}
                  >
                    C
                  </button>
                  <button
                    data-testid='sell-btn'
                    disabled={true}
                  >
                    V
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      {
        redirect && <Redirect push to='/buyorsell' />
      }
    </>
  )
}

export default ActionsAvailable;