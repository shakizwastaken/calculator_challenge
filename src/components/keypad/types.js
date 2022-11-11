import { Action } from "../../utils/actions";

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

  actions: [
    new Action("Del", "DELETE", (a) => Math.trunc(a / 10)),
    new Action("+", "ADDITION", (a, b) => a + b),
    new Action("-", "SUBSTRACTION", (a, b) => a - b),
    new Action("/", "DIVISION", (a, b) => a / b),
    new Action("*", "MULTIPLICATION", (a, b) => a * b),
    new Action("Reset", "RESET", (initialState) => initialState),
  ],

  symbols: {
    dot: {
      label: ".",
      value: "SYMBOL_DOT",
    },
  },
};
