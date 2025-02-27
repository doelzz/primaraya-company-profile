import React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeContext } from "../contexts/ThemeContext";
import { lightPalette, darkPalette, typography } from "./constants";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useThemeContext();

  const theme = createTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography,
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeWrapper;
