import React, { useState } from 'react';

import emailValidation from '../utils/emailValidation';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ value }) => {

    const emailValidated = emailValidation(value);

    if (emailValidated) {
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
      return alert('email e senha invalidos');
    }

    if (!validEmail) return alert('email invalido');

    if (password.length < 8) return alert('senha invalida');

  }

  return (
    <section>
      <div>
        <label htmlFor='input-email'>
            <input
              name='input-email'
              placeholder='Email'
              type='text'
              data-testid='input-email'
              onChange={ ({ target }) => handleChangeEmail(target) }
            />
        </label>
      </div>
      <div>
        <label htmlFor='input-password'>
          <input
            name='input-password'
            placeholder='Senha'
            type='password'
            data-testid='input-password'
            onChange={ ({ target }) => handleChangePassword(target) }
          />
        </label>
      </div>

      <button
        onClick={() => acessButtonClick()}
      >
        Acessar
      </button>
    </section>
  );
}

export default Login;