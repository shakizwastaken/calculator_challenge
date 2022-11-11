import { useCalculator } from "../../../context/calculator";
import { dispatchPressButton } from "../../../context/calculator/actions";
import { keyStyles } from "../types";

const Key = ({ type }) => {
  const { dispatch } = useCalculator();

  const { label, style } = type;

  const onClick = () => {
    dispatchPressButton(dispatch,type);
  };

  return (
    <div onClick={onClick} className={`key shadow-2xl ${style ? style : keyStyles.main}`}>
      {label}
    </div>
  );
};

export default Key;
