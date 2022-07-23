import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../context/appContext';

import { Title, Article, Table, Td, Button } from '../style-components/ActionsAvailable';

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
      <Article>
        <Title>Disponíveis para investir:</Title>
        <Table>
          <thead>
            <tr>
              <Td background='#DCDCDC'>Ação</Td>
              <Td background='#DCDCDC'>Qtde</Td>
              <Td background='#DCDCDC'>Valor (R$)</Td>
              <Td background='#DCDCDC'>Negociar</Td>
            </tr>
          </thead>
          <tbody>
            {actions.map((action) => (
              <tr key={action.id}>
                <Td background='#DAA520'>{action.title}</Td>
                <Td background='#C0C0C0'>{action.amount}</Td>
                <Td background='#000000'>{action.price}</Td>
                <Td>
                  <Button background='#4169E1'
                    name={action.title}
                    data-testid='buy-btn'
                    onClick={({ target }) => buyBtn(target)}
                  >
                    C
                  </Button>
                  <Button
                    data-testid='sell-btn'
                    disabled={true}
                  >
                    V
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Article>
      {
        redirect && <Redirect push to='/buyorsell' />
      }
    </>
  )
}

export default ActionsAvailable;