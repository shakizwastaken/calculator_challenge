import { createContext, useContext, useReducer } from "react";
import { actions } from "./actions";

const initialState = {
  history: [],
  operation: {},
  current: 0,
  previous: 0,
  action: "",
};

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.number:
      return { ...state, current: state.current * 10 + payload };

    case actions.calculate:
      switch (state.operation.value) {
        case actions.addition:
          return {
            ...state,
            operation: {},
            current: state.current + state.previous,
          };

        case actions.multiplication:
          return {
            ...state,
            operation: {},
            current: state.current + state.previous,
          };

        case actions.sutraction:
          return {
            ...state,
            operation: {},
            current: state.current + state.previous,
          };

        case actions.division:
          return {
            ...state,
            operation: {},
            current: state.current + state.previous,
          };

        default:
          return state;
      }

    case actions.reset:
      return initialState;

    default:
      return {
        ...state,
        operation: payload,
        previous: state.current,
        current: 0,
      };
  }
};

export const calculatorContext = createContext(initialState);

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <calculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </calculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(calculatorContext);
};
