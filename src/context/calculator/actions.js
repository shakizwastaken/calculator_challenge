export const actions = {
  number: "NUMBER",

  addition: "ADDITION",
  sutraction: "SUBSTRACTION",
  multiplication: "MULTIPLICATION",
  divsion: "DIVISION",
  calculate: "CALCULATE",
  reset: "RESET",
  delete: "DELETE",

  sumbol_dot: "SYMBOL_DOT",
};

//dispatch
export const dispatchPressButton = (dispatch, type) => {
  if (Number.isInteger(type.value)) {
    dispatch({
      type: actions.number,
      payload: type.value,
    });
  } else {
    dispatch({
      type: type.value,
      payload: type,
    });
  }

  return {};
};

export const calculate = (action) => {};
