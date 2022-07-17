import React, { useState } from 'react';
import appContext from './appContext';

function Provider({ children }) {
  const [action, setAction] = useState([]);
  const contextValue = {
    action,
    setAction,
  };

  return (
    <appContext.Provider value={contextValue}>
      {children}
    </appContext.Provider>
  );
}

export default Provider;