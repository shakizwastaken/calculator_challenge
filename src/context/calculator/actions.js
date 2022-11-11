import { keyTypes } from "../../components/keypad/types";

export const actions = {
  number: "NUMBER",
  
  addition: "ADDITION",
  sutraction: "SUBSTRACTION",
  multiplication: "MULTIPLICATION",
  divsion: "DIVISION",
  calculate: "CALCULATE",
  reset: "RESET",
  delete: "DELETE",

  sumbol_dot: "SYMBOL_DOT"

};

export const dispatchPressButton = (dispatch,type) => {

  if(Number.isInteger(type.value)){
    dispatch({
      type:actions.number,
      payload:type.value
    });
  }

  return {
  }

};

export const calculate = (action) =>{

}