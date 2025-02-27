import { createTheme, Theme } from "@mui/material";

export const getTheme = (isDarkMode: boolean): Theme =>
    createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
            background: {
                default: isDarkMode ? "#121212" : "#f8f9fa",
                paper: isDarkMode ? "#1e1e1e" : "#ffffff",
            },
            text: {
                primary: isDarkMode ? "#ffffff" : "#212529",
            },
        },
        typography: {
            fontFamily: "'Roboto', 'Arial', sans-serif",
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        padding: "16px",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: "8px",
                        textTransform: "none",
                        transition: "all 0.3s ease-in-out",
                    },
                },
            },
        },
    });
