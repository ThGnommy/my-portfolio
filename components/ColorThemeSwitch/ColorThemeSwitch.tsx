import React from "react";

type ThemeProps = {
  isDark: boolean;
  handleThemeFunc: () => void;
};

export const ColorThemeSwitch = ({ isDark, handleThemeFunc }: ThemeProps) => {
  const moon = "🌙";
  const sun = "☀️";

  return (
    <div
      onClick={handleThemeFunc}
      className={`absolute flex flex-col justify-center
      items-start top-4 right-4 h-8 w-20 dark:bg-primary bg-custom-dark rounded-full shadow-inner drop-shadow-md cursor-pointer`}
    >
      <div
        className={`flex flex-col justify-center items-center bg-primary dark:bg-custom-dark h-7 w-7 rounded-full my-[3px] mr-[3px] ${
          !isDark ? "ml-[3px]" : "ml-[49px]"
        } ${isDark ? "shadow-inner" : "shadow-2xl"}
        transition-[ml_shadow_rotate] duration-500 ${isDark ? "rotate-180" : "-rotate-180"}`}
      >
        <span className="-scale-y-100">{isDark ? sun : moon}</span>
      </div>
    </div>
  );
};
