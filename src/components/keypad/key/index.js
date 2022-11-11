import { useCalculator } from "../../../context/calculator";
import { dispatchPressButton } from "../../../context/calculator/actions";
import { keyStyles } from "../types";

const Key = ({ type, style }) => {
  const { dispatch } = useCalculator();

  const onClick = () => {
    dispatchPressButton(dispatch, type);
  };

  return (
    <div
      onClick={onClick}
      className={`key shadow-2xl ${style ? style : keyStyles.main}`}
    >
      {type?.label}
    </div>
  );
};

export default Key;
