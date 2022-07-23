import React from 'react';

import { Headers, GlobalStyle } from '../style-components/Header';

function Header () {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <Headers>
      <GlobalStyle />
      <h3>{ userEmail }</h3>
    </Headers>
  )
}

export default Header;