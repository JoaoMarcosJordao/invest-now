import React, { useContext } from 'react';
import actionsData from '../actions';
import appContext from '../context/appContext';

function ActionsAvailable() {

  const {action, setAction} = useContext(appContext);

  const buyBtn = (target) => {

    const { name } = target;

    const filteredAction = actionsData.filter((action) => action.title === name);

    setAction(filteredAction);

  };
  
  console.log(action);

  return (
    <>
      <article>
        <h4>Minhas ações:</h4>
        {/* {action.length === 0 && <span>Você ainda nâo possui ações.</span>} */}
      </article>
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
            {actionsData.map((action) => (
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
      </article></>
  )
}

export default ActionsAvailable;