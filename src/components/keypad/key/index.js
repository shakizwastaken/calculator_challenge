import { keyStyles } from "../types";

const Key = ({ type: { label, style } }) => {
  return (
    <div className={`key shadow-2xl ${style ? style : keyStyles.main}`}>
      {label}
    </div>
  );
};

export default Key;
