import { createTheme, ThemeOptions } from "@mui/material";

import baseThemeOptions from "src/assets/styles/themes/_baseThemeOptions";

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: "light",
  },
};

export default createTheme(lightThemeOptions);
