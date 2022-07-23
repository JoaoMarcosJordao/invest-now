import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../context/appContext';
import { Table, Td, Button } from '../style-components/ActionsAvailable';


function MyActions() {
  const { myActions } = useContext(appContext);

  const [redirect, setRedirect] = useState(false);

  const buyBtn = (target) => {


    setRedirect(true);
  };

  const sellBtn = () => {

    setRedirect(true);

  };


  return (
    <>
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
          {myActions.map((action) => (
            <tr key={action.title}>
              <Td background='#DAA520'>{action.title}</Td>
              <Td background='#C0C0C0'>{action.quantity}</Td>
              <Td background='#000000'>{action.price}</Td>
              <Td>
                <Button background='#4169E1'
                  name={action.title}
                  data-testid='buy-btn'
                  onClick={({ target }) => buyBtn(target)}
                >
                  C
                </Button>
                <Button background='#228B22'
                  data-testid='sell-btn'
                  onClick={() => sellBtn()}

                >
                  V
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {
        redirect && <Redirect push to='/buyorsell' />
      }
    </>
  )
}

export default MyActions;