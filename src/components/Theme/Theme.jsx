import React from "react";
import useDarkMode from "../../utils/useDarkMode";

export default function Theme() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <>
      <button className="theme" onClick={toggleTheme}>
        {theme === 'light' ? (
          <img src="./assets/images/moon.svg" alt="" />
        ) : (
          <img src="./assets/images/sun.svg" alt="" />
        )}
      </button>
    </>
  );
}
