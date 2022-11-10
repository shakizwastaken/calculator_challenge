import { createContext, useContext, useReducer } from "react";
import { actions } from "./actions";

const initialState = {
  current: 0,
};

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.addNumber:
      state.current = state.current * 10 + payload;
      return state;

    default:
      return state;
  }
};

export const calculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <calculatorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </calculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(calculatorContext);
};
