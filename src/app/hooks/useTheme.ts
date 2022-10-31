import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "src/assets/styles/themes";

function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
  }, [prefersDarkMode]);

  return theme;
}

export default useTheme;
