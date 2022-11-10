import "./display.css";

const DisplayContainer = ({ theme }) => {
  return (
    <div
      className={`displayContainer padding container text-${
        theme === "default" ? "textColorLight" : "textColorDark"
      }`}
    >
      0
    </div>
  );
};

export default DisplayContainer;
