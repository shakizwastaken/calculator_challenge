import { useCalculator } from "../../context/calculator";
import "./display.css";

const DisplayContainer = ({ theme }) => {
  const { current } = useCalculator();

  return (
    <div
      className={`displayContainer padding container text-${
        theme === "default" ? "textColorLight" : "textColorDark"
      }`}
    >
      {current}
    </div>
  );
};

export default DisplayContainer;
