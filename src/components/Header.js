import React from 'react';

function Header () {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <header>
      <h3>{ userEmail }</h3>
    </header>
  )
}

export default Header;