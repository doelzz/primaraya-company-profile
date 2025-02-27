import React, { useState, useEffect, memo } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    useTheme,
    Paper,
    Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { blueGrey, grey, common } from "@mui/material/colors";
import { useInView } from "react-intersection-observer";

const certifications = [
    "Nomor Induk Berusaha (NIB)",
    "Tanda Daftar Perusahaan Perseroan Terbatas",
    "Surat Keterangan Domisili Perusahaan",
    "Surat Keterangan dari Lurah Jatinegara Kaum",
    "Surat Pengukuhan Pengusaha Kena Pajak",
    "Surat Keterangan Terdaftar",
    "NPWP",
    "Keputusan Menteri Hukum dan HAM",
    "Sertifikasi Distribusi Alat Kesehatan",
];

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface AboutUsProps {
    isDarkMode?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isDarkMode }) => {
    const theme = useTheme();
    const darkMode = isDarkMode ?? theme.palette.mode === "dark";
    const [animateText, setAnimateText] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) setAnimateText(true);
    }, [inView]);

    return (
        <Box
            sx={{
                background: darkMode ? blueGrey[900] : blueGrey[50],
                padding: "80px 20px",
                borderRadius: 4,
                textAlign: "center",
            }}
            id="about-us"
        >
            <Container maxWidth="lg">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        color={darkMode ? common.white : blueGrey[900]}
                        gutterBottom
                    >
                        Tentang Kami
                    </Typography>
                    <Divider sx={{ background: grey[500], marginBottom: "40px" }} />
                </motion.div>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                PT. Primaraya Graha Nusantara
                            </Typography>
                            <Typography variant="body1" color={grey[400]} paragraph>
                                Didirikan pada 21 Februari 2011, PT. Primaraya Graha Nusantara adalah mitra terpercaya di bidang Supplier, Trading, Mechanical & Electrical, Advertising & Printing, Packaging, dan Medical Supply. Kami berkomitmen untuk menyediakan solusi terbaik dengan standar kualitas tinggi.
                            </Typography>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Visi & Misi
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Menjadi perusahaan yang tangguh dan terpercaya dalam industri yang kami geluti." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mengutamakan kepuasan pelanggan dengan layanan terbaik dan inovatif." />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Meningkatkan kesejahteraan karyawan dengan lingkungan kerja yang produktif dan positif." />
                                </ListItem>
                            </List>
                        </motion.div>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Sertifikasi Kami
                        </Typography>
                        <Divider sx={{ background: grey[500], marginBottom: "40px" }} />
                    </motion.div>
                    <Grid container spacing={2} justifyContent="center">
                        {certifications.map((cert, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: "16px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                        background: darkMode ? blueGrey[700] : common.white,
                                        transition: "all 0.3s ease-in-out",
                                        '&:hover': {
                                            transform: "scale(1.05)",
                                            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <Typography variant="body1" fontWeight={600} color={darkMode ? common.white : blueGrey[700]}>
                                        {cert}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default memo(AboutUs);
