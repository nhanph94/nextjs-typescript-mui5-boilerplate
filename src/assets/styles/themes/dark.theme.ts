import { createTheme, ThemeOptions } from "@mui/material";

import baseThemeOptions from "src/assets/styles/themes/_baseThemeOptions";

const darkThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: "dark",
    background: {
      default: "#2c3e50",
    },
  },
};

export default createTheme(darkThemeOptions);
