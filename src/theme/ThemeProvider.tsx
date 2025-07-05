import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#5c2751", // Purple color from the design
      light: "#f4eaf2", // Light purple background
      dark: "#9c27b0", // Darker purple accent
    },
    secondary: {
      main: "#f95cdd", // Pink color used for buttons
      light: "#fcedff", // Light pink background
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#2d2d2d", // onboarding-background-grey
      secondary: "#5c2751", // Purple text
    },
    divider: "rgba(216, 216, 216, 1)", // deviders-grey
    accent: {
      mandysPink: "rgba(242, 191, 175, 1)",
    },
    neutral: {
      700: "rgba(55, 65, 81, 1)",
      900: "rgba(17, 24, 39, 1)",
      zircon: "rgba(248, 249, 255, 1)",
    },
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      '"Mulish"',
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: '"Poppins", Helvetica',
      fontSize: "67px",
      fontWeight: 700,
      letterSpacing: "-1.675px",
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: '"Poppins", Helvetica',
      fontSize: "38px",
      fontWeight: 700,
      letterSpacing: "-0.76px",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Poppins", Helvetica',
      fontSize: "21px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: '"Mulish", Helvetica',
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Mulish", Helvetica',
      fontSize: "21px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Poppins", Helvetica',
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          padding: "16px 50px",
          height: "60px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          backgroundColor: "#f95cdd",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#e04bc7",
          },
        },
        outlinedPrimary: {
          borderColor: "#000000",
          color: "#000000",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "34.85px 29.63px 48.34px rgba(50, 101, 255, 0.05)",
          border: "1px solid #e5f4f2",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            height: "60px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Mulish", Helvetica',
          fontSize: "16px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
