import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMOde] = useLocalStorage("onDarkmode", false);
  return [isDarkMode, setIsDarkMOde];
};

export default useDarkMode;
