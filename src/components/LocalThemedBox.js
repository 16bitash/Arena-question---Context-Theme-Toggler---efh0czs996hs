import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const [localTheme, setLocalTheme] = useState("light");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const handleButtonClick = () => {
    if (localTheme === "light") {
      setLocalTheme("dark");
      return;
    }

    setLocalTheme("light");
  };

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={localTheme === "light" ? "bg-light" : "bg-dark"}
    >
      {/* Write code below this line */}
      <p
        id="local-themed-text-container"
        className={localTheme === "light" ? "txt-light" : "txt-dark"}
      >
        Some text
      </p>
      <button
        onClick={handleButtonClick}
        id="local-theme-toggler"
        className={localTheme === "light" ? "btn btn-light" : "btn btn-dark"}
      >
        Toggle local theme to {localTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
