import React, { createContext, useContext, useReducer} from "react";

//Prepares The dataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,
    initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull Info from data Layer
export const useStateValue =() => useContext(StateContext);