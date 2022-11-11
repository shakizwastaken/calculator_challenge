import "./header.css";

import CurrentTheme from "./currentTheme";
import { themes } from "../../utils/tailwind";

const HeaderContainer = ({ theme, setTheme }) => {
  const next = () => {
    const nextIndex =
      themes.indexOf(theme) === themes.length - 1
        ? 0
        : themes.indexOf(theme) + 1;
    setTheme(themes[nextIndex]);
  };

  return (
    <div
      className={`headerContainer container text-${
        theme === "default" ? "textColorLight" : "textColorDark"
      }`}
    >
      <h1>calc</h1>

      <div className="headerThemes">
        <span>THEME</span>
        <button onClick={next}>
          <CurrentTheme theme={theme} />
        </button>
      </div>
    </div>
  );
};

export default HeaderContainer;
