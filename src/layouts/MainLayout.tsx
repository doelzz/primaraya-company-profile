import React, { useMemo } from "react";
import { Box, Container, CssBaseline, ThemeProvider, Stack, responsiveFontSizes } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import { useThemeContext } from "../contexts/ThemeContext";
import { getTheme } from "../theme/themeConfig";

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { isDarkMode, toggleTheme } = useThemeContext();

    // Memoized theme for performance optimization
    const theme = useMemo(() => responsiveFontSizes(getTheme(isDarkMode)), [isDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

            {/* Layout Wrapper */}
            <Stack
                direction="column"
                minHeight="100vh"
                bgcolor={theme.palette.background.default}
                color={theme.palette.text.primary}
                overflow="hidden"
            >
                {/* Motion untuk Smooth Transitions */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <HeroSection isDarkMode={isDarkMode} />
                </motion.div>

                {/* Sections Wrapper */}
                <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: { xs: 4, md: 6 } }}>
                    {/* About Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <AboutUs isDarkMode={isDarkMode} />
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    >
                        <ServicesSection isDarkMode={isDarkMode} />
                    </motion.div>

                    {/* Dynamic Content */}
                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 2,
                            boxShadow: isDarkMode ? "0 4px 12px rgba(0, 0, 0, 0.4)" : "0 4px 12px rgba(0, 0, 0, 0.1)",
                            p: { xs: 2, md: 4 },
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        {children}
                    </Box>
                </Container>

                {/* Footer */}
                <Footer />
            </Stack>
        </ThemeProvider>
    );
};

export default React.memo(MainLayout);
