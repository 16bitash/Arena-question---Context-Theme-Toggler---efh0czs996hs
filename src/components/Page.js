import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme === "light" ? "container bg-light" : "container bg-dark"}
      id="themed-page"
    >
      <p
        id="themed-text-container"
        className={theme === "light" ? "txt-light" : "txt-dark"}
      >
        lorem ipsum dolor iterit n stuff
      </p>
      <button
        className={theme === "light" ? "btn btn-light" : "btn btn-dark"}
        id="themed-button"
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
