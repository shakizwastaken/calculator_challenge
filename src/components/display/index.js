import "./display.css";

import { useCalculator } from "../../context/calculator";

const DisplayContainer = ({ theme }) => {
  const {
    state: { operation },
  } = useCalculator();

  return (
    <div
      className={`displayContainer padding container text-${
        theme === "default" ? "textColorLight" : "textColorDark"
      }`}
    >
      <span>{operation.formatPrev()}</span>
      <h1>{operation.current}</h1>
    </div>
  );
};

export default DisplayContainer;
