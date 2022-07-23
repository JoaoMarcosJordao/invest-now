import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import emailValidation from '../utils/emailValidation';

import {
  LoginContainer,
  Input, GlobalStyle, Button, LoginDiv,
  Span,
  Title,
} from '../style-components/LoginPage';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [invalid, setInvalid] = useState({});

  const handleChangeEmail = ({ value }) => {
    const date = new Date();

    const emailValidated = emailValidation(value);

    if (emailValidated) {

      localStorage.setItem('RegistrationDate', date)
      localStorage.setItem('userEmail', value)

      setEmail(value);
    }

  }

  const handleChangePassword = ({ value }) => {
    setPassword(value)
  }


  const acessButtonClick = () => {

    const validEmail = emailValidation(email);

    if (!validEmail && password.length < 8) {
      return setInvalid({
        emailPassword: true
      });
    }

    if (!validEmail) {
      return setInvalid({
        email: true
      });
    };

    if (password.length < 8) {
      return setInvalid({
        password: true
      });
    };

    setRedirect(true);

  }

  return (
    <LoginContainer>
      <GlobalStyle />
      <Title>Invest Now</Title>
      <LoginDiv>
        <div>
          <Input
            name='input-email'
            placeholder='Email'
            type='text'
            data-testid='input-email'
            onChange={({ target }) => handleChangeEmail(target)}
          />
        </div>

        <div>
          <Input
            name='input-password'
            placeholder='Senha'
            type='password'
            data-testid='input-password'
            onChange={({ target }) => handleChangePassword(target)}
          />

        </div>

        {
          invalid.email && <Span className='invalid'>Email inválido</Span>
        }

        {
          invalid.password && <Span className='invalid'>Senha no mínimo 8 caracters</Span>
        }


        {
          invalid.emailPassword && <Span className='invalid'>Email e senha inválidos</Span>
        }

        <div>
          <Button
            data-testid='acess-btn'
            onClick={() => acessButtonClick()}
          >
            Acessar
          </Button>
        </div>
        {
          redirect && <Redirect push to='/actions' />
        }
      </LoginDiv>
    </LoginContainer>
  );
}

export default Login;