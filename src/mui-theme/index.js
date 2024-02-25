// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";

const fontfamily =
  "'Gilroy', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

export default createTheme({
  typography: {
    fontFamily: [fontfamily].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          paddingRight: "20px",
          "@media (min-width: 600px)": {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
          "@media (max-width: 768px)": {
            width: "100%",
            paddingLeft: "5px",
            paddingRight: "5px",
          },
        },
        maxWidthLg: {
          "@media (min-width: 1100px)": {
            maxWidth: "1256px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `12px 40px`,
          fontWeight: 500,
          fontSize: "17px",
          lineHeight: "20px",
          borderRadius: "8px",
          transition: "all 0.25s ease-in-out",
          textTransform: "none",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        textPrimary: {
          background: "blue !important",
          color: "#fff",
          "&:hover": {
            background: "gray !important",
          },
        },
      },
    },
  },
});
