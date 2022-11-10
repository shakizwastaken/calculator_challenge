import "./header.css";

const themes = ["default", "light", "neon"];

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
      </div>

      <button onClick={next}>
        <span>next</span>
      </button>
    </div>
  );
};

export default HeaderContainer;
