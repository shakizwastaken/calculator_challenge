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
      value: "ADDITION",
    },
    substraction: {
      label: "-",
      value: "SUBSTRACTION",
    },
    multiplication: {
      label: "x",
      value: "MULTIPLICATION",
    },
    division: {
      label: "/",
      value: "DIVISION",
    },
    calculate: {
      label: "=",
      value: "CALCULATE",
      style: keyStyles.accent,
    },
    reset: {
      label: "RESET",
      value: "RESET",
      style: keyStyles.primary,
    },
    delete: {
      label: "DEL",
      value: "DELETE",
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
