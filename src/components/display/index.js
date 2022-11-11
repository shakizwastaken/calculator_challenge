import "./display.css";

import { useCalculator } from "../../context/calculator";

const DisplayContainer = ({ theme }) => {
  const {
    state: { current, previous, operation },
  } = useCalculator();

  return (
    <div
      className={`displayContainer padding container text-${
        theme === "default" ? "textColorLight" : "textColorDark"
      }`}
    >
      <span>
        {previous} {operation.value && operation.label}
      </span>
      <h1>{current}</h1>
    </div>
  );
};

export default DisplayContainer;
