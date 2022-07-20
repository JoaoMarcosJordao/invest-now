import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../context/appContext';


function MyActions() {
  const { myActions  } = useContext(appContext);

  const [redirect, setRedirect] = useState(false);

  const buyBtn = (target) => {
    

    setRedirect(true);
  };

  const sellBtn = () => {

    setRedirect(true);

  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Ação</td>
            <td>Qtde</td>
            <td>Valor (R$)</td>
          </tr>
        </thead>
        <tbody>
          {myActions.map((action) => (
            <tr key={action.title}>
              <td>{action.title}</td>
              <td>{action.quantity}</td>
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
                    name={action.title}
                    data-testid='sell-btn'
                    onClick={() => sellBtn()}
                  >
                    V
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        redirect && <Redirect push to='/buyorsell' />
      }
    </>
  )
}

export default MyActions;