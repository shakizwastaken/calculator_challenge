import { useCalculator } from "../../../context/calculator";
import { keyStyles } from "../types";

const Key = ({ type }) => {
  const { dispatch } = useCalculator();

  const { label, style } = type;

  const onClick = () => {};

  return (
    <div className={`key shadow-2xl ${style ? style : keyStyles.main}`}>
      {label}
    </div>
  );
};

export default Key;
