import React, { createContext, useReducer }from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

// Create context menu
export const GlobalContext = createContext(initialState);

// Provider Cpmponent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransactions(id) {
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        });
    }

    function addTransactions(transaction ) {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        { children }
    </GlobalContext.Provider>)
}