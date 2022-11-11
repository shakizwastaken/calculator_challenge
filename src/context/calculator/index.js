import { createContext, useContext, useReducer } from "react";
import { actions } from "./actions";

const initialState = {
  history:[],
  operation:'',
  current: 0,
  previous:0,
  action:'',
};

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.number:
      return {...state,current:state.current * 10 + payload};

    // case actions.calculate:
    //   switch(state.operation){
    //     case actions.addition:
    //         state.current += state.previous;

    //     case actions.multiplication:
    //       state.current *= state.previous;

    //     case actions.sutraction:
    //       state.current -= state.previous;
    
    //     case actions.division:
    //       state.current /= state.previous;
    //}

    default:
      return state;
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
}
