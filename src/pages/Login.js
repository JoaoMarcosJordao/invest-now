import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import emailValidation from '../utils/emailValidation';

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
    <section>
      <div>
        <div>
          <input
            name='input-email'
            placeholder='Email'
            type='text'
            data-testid='input-email'
            onChange={({ target }) => handleChangeEmail(target)}
          />

          {
            invalid.email && <span className='invalid'>*Email inválido*</span>
          }

        </div>

        <div>
          <input
            name='input-password'
            placeholder='Senha'
            type='password'
            data-testid='input-password'
            onChange={({ target }) => handleChangePassword(target)}
          />

          {
            invalid.password && <span className='invalid'>*Senha inválida*</span>
          }

        </div>

        <div>

          {
            invalid.emailPassword && <span className='invalid'>*Email e senha inválidos*</span>
          }

          <button
            data-testid='acess-btn'
            onClick={() => acessButtonClick()}
          >
            Acessar
          </button>
        </div>

        {
          redirect && <Redirect push to='/actions' />
        }

      </div>
    </section>
  );
}

export default Login;