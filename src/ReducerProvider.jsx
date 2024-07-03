import React, { createContext, useContext, useReducer } from "react";
const ReducerContext = createContext("");
export default function ReducerProvider({children}) {
  const Reducer = (currentState, action) => {
    if (action.type == "test") {
      return action.payload.number1 + action.payload.number1;
    }
  };
  return (
    <div>
      <ReducerContext.Provider value={{ Reducer }}>{children}</ReducerContext.Provider>
    </div>
  );
}
export const useReducerPorvider = () => {
  return useContext(ReducerContext);
};
