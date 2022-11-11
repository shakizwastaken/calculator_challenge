import { themes } from "../../../utils/tailwind";

const CurrentTheme = ({ theme }) => {
  const renderThemes = () => themes.map((theme, i) => <div>{i + 1}</div>);

  return (
    <div className="flex flex-col justify-center items-center w-[50px]">
      <div className="headerThemes_themes">{renderThemes()}</div>
      <div className="w-full rounded-full relative flex justify-center items-center p-2 bg-keypadBg h-[10px]">
        <div
          className={`h-[10px] w-[10px] rounded-full bg-keyBgAccent absolute ${
            themes.indexOf(theme) === 0
              ? "left-0"
              : themes.indexOf(theme) === 1
              ? ""
              : "right-0"
          } mx-2 ease-linear `}
        ></div>
      </div>
    </div>
  );
};

export default CurrentTheme;
