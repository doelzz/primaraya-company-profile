import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, LocationOn, Email, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";
import { blueGrey, grey, common } from "@mui/material/colors";

const Footer = () => {
    return (
        <Box
            component={motion.footer}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ background: blueGrey[900], color: common.white, py: 6 }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Information */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight={700}>PT. Primaraya</Typography>
                        <Typography variant="body2" color={grey[400]}>
                            Supplier, Trading, Mechanical & Electrical, Advertising & Printing, Carton Box Packaging, Medical Supply, dan lainnya.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight={700} mb={1}>Navigasi Cepat</Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link href="#services" color="inherit" underline="hover">Layanan</Link>
                            <Link href="#products" color="inherit" underline="hover">Produk</Link>
                            <Link href="#projects" color="inherit" underline="hover">Proyek</Link>
                            <Link href="#clients" color="inherit" underline="hover">Pelanggan Kami</Link>
                            <Link href="#contact" color="inherit" underline="hover">Kontak Kami</Link>
                        </Box>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" fontWeight={700} mb={1}>Hubungi Kami</Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                            <LocationOn fontSize="small" />
                            <Typography variant="body2">Jl. Contoh No. 123, Jakarta</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Email fontSize="small" />
                            <Typography variant="body2">info@primaraya.com</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Phone fontSize="small" />
                            <Typography variant="body2">+62 812 3456 7890</Typography>
                        </Box>

                        {/* Social Media Icons */}
                        <Box mt={2} display="flex" gap={1}>
                            <IconButton href="#" color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, backgroundColor: grey[700] }} />

                {/* Clients Section */}
                <Typography variant="h6" textAlign="center" fontWeight={700} mb={2}>Pelanggan Kami</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {["Toyota Boshoku Indonesia", "LG Electronics", "Gojek Indonesia", "Paramount Bed", "Cipta Mortar Utama"].map((client, index) => (
                        <Grid item key={index} xs={6} sm={3} textAlign="center">
                            <Typography variant="body2" color={grey[400]}>{client}</Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* Copyright & Privacy */}
                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color={grey[500]}>
                        &copy; {new Date().getFullYear()} PT. Primaraya. All rights reserved. |
                        <Link href="#" color="inherit" underline="hover"> Kebijakan Privasi</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;