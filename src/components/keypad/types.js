export const keyStyles = {
  main: "bg-keyBgMain hover:bg-keyBgMainActive text-textColorDark shadow-keyShadowMain ",
  primary:
    "bg-keyBgPrimary  hover:bg-keyBgPrimaryActive text-textColorLight shadow-keyShadowPrimary",
  accent:
    "bg-keyBgAccent  hover:bg-keyBgAccentActive text-textColorLight shadow-keyShadowAccent",
};

export const keyTypes = {
  numeric: (value) => ({
    label: value,
    value,
  }),

  operations: {
    addition: {
      label: "+",
      value: "OPRATION_ADDITION",
    },
    substraction: {
      label: "-",
      value: "OPRATION_SUBSTRACTION",
    },
    multiplication: {
      label: "x",
      value: "OPRATION_MULTIPLICATION",
    },
    division: {
      label: "/",
      value: "OPERATION_DIVISION",
    },
    calculate: {
      label: "=",
      value: "OPERATION_CALCULATE",
      style: keyStyles.accent,
    },
    reset: {
      label: "RESET",
      value: "OPERATION_RESET",
      style: keyStyles.primary,
    },
    delete: {
      label: "DEL",
      value: "OPERATION_DELETE",
      style: keyStyles.primary,
    },
  },

  symbols: {
    dot: {
      label: ".",
      value: "SYMBOL_DOT",
    },
  },
};
