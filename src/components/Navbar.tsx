import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Menu,
    MenuItem,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { Link as ScrollLink } from "react-scroll";
import { blueGrey, pink, deepPurple } from "@mui/material/colors";

const CompanyLogo = styled("img")({
    height: "40px",
    marginRight: "12px",
    cursor: "pointer",
    transition: "opacity 0.3s ease-in-out",
    "&:hover": {
        opacity: 0.8,
    },
});

const Navbar: React.FC<{ onThemeToggle: () => void; isDarkMode: boolean }> = ({
                                                                                  onThemeToggle,
                                                                                  isDarkMode,
                                                                              }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const sections = [
        { label: "Tentang Kami", id: "about-us" },
        { label: "Layanan", id: "services" },
        { label: "Produk", id: "products" },
        { label: "Proyek", id: "projects" },
        { label: "Pelanggan Kami", id: "clients" },
        { label: "Kontak Kami", id: "contact" },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: isDarkMode
                        ? "rgba(26, 35, 126, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    boxShadow: isDarkMode ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "0 4px 10px rgba(0, 0, 0, 0.1)",
                    color: isDarkMode ? pink[50] : blueGrey[800],
                    transition: "all 0.3s ease-in-out",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box display="flex" alignItems="center">
                        <ScrollLink to="hero" smooth duration={1000} style={{ display: "flex", alignItems: "center" }}>
                            <CompanyLogo src="/assets/logo.png" alt="Company Logo" />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    color: isDarkMode ? "#ffffff" : blueGrey[700],
                                    transition: "color 0.3s",
                                    "&:hover": { color: deepPurple[500] },
                                }}
                            >
                                PT Primaraya Graha Nusantara
                            </Typography>
                        </ScrollLink>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isSmallScreen && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {sections.map(({ label, id }) => (
                                <Button
                                    key={id}
                                    sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 500,
                                        textTransform: "none",
                                        color: isDarkMode ? "#ffffff" : blueGrey[700],
                                        transition: "color 0.3s ease-in-out",
                                        "&:hover": { color: pink[500] },
                                    }}
                                >
                                    <ScrollLink to={id} smooth offset={-70} duration={1000}>
                                        {label}
                                    </ScrollLink>
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Theme Toggle & Mobile Menu */}
                    <Box display="flex" alignItems="center">
                        <IconButton
                            color="inherit"
                            onClick={onThemeToggle}
                            sx={{
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": { transform: "rotate(180deg)" },
                            }}
                        >
                            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>

                        {/* Mobile Menu Button */}
                        {isSmallScreen && (
                            <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer Menu */}
            <SwipeableDrawer
                anchor="right"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                onOpen={() => setMenuOpen(true)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "75%",
                        background: isDarkMode ? blueGrey[900] : blueGrey[50],
                        color: isDarkMode ? "#ffffff" : blueGrey[900],
                        padding: "20px",
                    },
                }}
            >
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => setMenuOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {sections.map(({ label, id }) => (
                        <ListItem key={id} disablePadding>
                            <ListItemButton onClick={() => setMenuOpen(false)}>
                                <ScrollLink to={id} smooth offset={-70} duration={1000} style={{ width: "100%" }}>
                                    <ListItemText
                                        primary={label}
                                        sx={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontWeight: 500,
                                            textAlign: "center",
                                            transition: "color 0.3s ease-in-out",
                                            "&:hover": { color: pink[500] },
                                        }}
                                    />
                                </ScrollLink>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
};

export default Navbar;
