import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode === true) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-elements-dark py-5 shadow-default fixed w-screen top-0">
      <div className="container flex">
        <h1 className="banner text-xl sm:text-2xl font-extrabold">
          Where in the world?
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="font-semibold ml-auto"
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} style={{ color: "#fff" }} />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              style={{ color: "hsl(200, 15%, 8%)" }}
            />
          )}
          <span className="ml-2 sm:ml-3">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
