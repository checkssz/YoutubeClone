
import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    isMenuOpen: false, 
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_MENU':
        return {
          ...state,
          isMenuOpen: !state.isMenuOpen,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
