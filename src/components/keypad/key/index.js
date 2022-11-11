import { useState } from "react";
import { useCalculator } from "../../../context/calculator";
import { dispatchPressButton } from "../../../context/calculator/actions";
import { keyStyles } from "../types";

const Key = ({ type, style }) => {
  const { dispatch } = useCalculator();

  const [pressed, setPressed] = useState(false);

  const onClick = () => {
    dispatchPressButton(dispatch, type);
  };

  return (
    <div
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseOut={() => setPressed(false)}
      className={`key ${pressed && "pressed"} shadow-2xl ${
        style ? style : keyStyles.main
      }`}
    >
      {type?.label}
    </div>
  );
};

export default Key;
