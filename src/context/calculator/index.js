import { createContext, useContext, useReducer } from "react";
import { Operation } from "../../utils/actions";
import { actions } from "./actions";

const initialState = {
  history: [],
  operation: new Operation(0, undefined, undefined, []),
  action: {},
};

export const calculatorReducer = (state, { type, payload }) => {
  // clone operation from state to avoid mutation
  let operation = state.operation.clone();

  switch (type) {
    case actions.number:
      operation.addNum(payload);
      return { ...state, operation };

    case actions.calculate:
      operation?.calc();
      return { ...state, operation };

    case actions.reset:
      return {
        ...initialState,
        history: [...state.history, state.operation],
        operation: new Operation(0, undefined, undefined, []),
      };

    default:
      operation.setAction(payload);
      return { ...state, operation };
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
