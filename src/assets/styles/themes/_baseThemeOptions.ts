import { alpha, ThemeOptions } from "@mui/material";

const baseThemeOptions: ThemeOptions = {
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        maxWidthXl: ({ theme: { breakpoints } }) => ({
          [breakpoints.up("lg")]: {
            maxWidth: breakpoints.values.lg,
          },

          [breakpoints.up("xl")]: {
            maxWidth: breakpoints.values.xl,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: { palette } }) => ({
          boxShadow: "none",

          // Styling for button variant contained
          ...(ownerState.color !== undefined &&
            ownerState.color !== "inherit" && {
              "&:hover": {
                ...(ownerState.variant &&
                  ["contained", "outlined"].includes(ownerState.variant) && {
                    backgroundColor: palette[ownerState.color].main,
                    color: "#fff",
                    boxShadow: `
                      0 10px 15px -3px ${alpha(
                        palette[ownerState.color].main,
                        0.5
                      )},
                      0 4px 6px -4px ${alpha(
                        palette[ownerState.color].main,
                        0.5
                      )}`,
                  }),
              },
            }),
        }),
      },
    },
  },

  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
};

export default baseThemeOptions;
