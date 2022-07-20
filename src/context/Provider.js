import React, { useState } from 'react';
import appContext from './appContext';
import dataActions from '../actions';

function Provider({ children }) {
  const [ actions, setActions ] = useState(dataActions);
  const [ tradeAction, setTradection] = useState({});
  const [myActions, setMyActions] = useState([]);

  const contextValue = {
    myActions,
    setMyActions,
    actions,
    setActions,
    tradeAction,
    setTradection,
  };

  return (
    <appContext.Provider value={contextValue}>
      {children}
    </appContext.Provider>
  );
}

export default Provider;