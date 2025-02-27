import React, {memo, useState} from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    Modal,
    IconButton,
    useTheme,
    CardMedia,
} from "@mui/material";
import {motion} from "framer-motion";
import {blueGrey, common} from "@mui/material/colors";
import {
    ShoppingCart,
    Build,
    Print,
    LocalHospital,
    BusinessCenter,
    Close,
    ArrowBack,
    ArrowForward
} from "@mui/icons-material";

// Sample Images (Ganti dengan gambar asli nanti)
const services = [
    {
        title: "Supplier & Trading",
        description: "Kami adalah mitra terpercaya dalam menyediakan berbagai produk berkualitas tinggi dengan harga kompetitif dan layanan yang andal.",
        icon: <ShoppingCart fontSize="large" />,
        images: ["/images/supply1.jpg", "/images/supply2.jpg", "/images/supply3.jpg"],
    },
    {
        title: "Mechanical & Electrical",
        description: "Menyediakan solusi Mechanical & Electrical terbaik untuk kebutuhan industri modern, dengan teknologi mutakhir dan tenaga ahli profesional.",
        icon: <Build fontSize="large" />,
        images: ["/images/mechanical1.jpg", "/images/mechanical2.jpg", "/images/mechanical3.jpg"],
    },
    {
        title: "Advertising & Printing",
        description: "Dukung citra bisnis Anda dengan layanan periklanan dan percetakan berkualitas tinggi, dari desain hingga produksi, untuk hasil yang maksimal.",
        icon: <Print fontSize="large" />,
        images: ["/images/advertising1.jpg", "/images/advertising2.jpg", "/images/advertising3.jpg"],
    },
    {
        title: "Carton Box Packaging",
        description: "Produksi kemasan berkualitas tinggi yang dirancang untuk memenuhi kebutuhan industri dan meningkatkan daya saing produk Anda.",
        icon: <BusinessCenter fontSize="large" />,
        images: ["/images/packaging1.jpg", "/images/packaging2.jpg", "/images/packaging3.jpg"],
    },
    {
        title: "Medical Supply",
        description: "Kami menyediakan alat kesehatan dengan standar mutu tinggi, memastikan keamanan dan kenyamanan bagi tenaga medis dan pasien.",
        icon: <LocalHospital fontSize="large" />,
        images: ["/images/medical1.jpg", "/images/medical2.jpg", "/images/medical3.jpg"],
    },
];
const fadeInUp = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
};

const Services: React.FC<{ isDarkMode?: boolean }> = ({isDarkMode}) => {
    const theme = useTheme();
    const darkMode = isDarkMode ?? theme.palette.mode === "dark";
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<{
        title: string;
        description: string;
        images: string[]
    } | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    const handleOpen = (service: any) => {
        setSelectedService(service);
        setCurrentImage(0); // Reset ke gambar pertama
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    const nextImage = () => setCurrentImage((prev) => (prev + 1) % (selectedService?.images.length || 1));
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + (selectedService?.images.length || 1)) % (selectedService?.images.length || 1));

    return (
        <Box sx={{background: darkMode ? blueGrey[900] : blueGrey[50], padding: "60px 20px", borderRadius: 4}}
             id="services">
            {/* Judul Section */}
            <Typography
                variant="h4"
                sx={{textAlign: "center", fontWeight: 700, color: darkMode ? common.white : blueGrey[900], mb: 4}}
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
            >
                Layanan Kami
            </Typography>

            {/* Grid Layanan */}
            <Grid container spacing={3} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            whileHover={{scale: 1.05}}
                            sx={{
                                backgroundColor: darkMode ? blueGrey[800] : common.white,
                                borderRadius: "12px",
                                boxShadow: darkMode ? "0 4px 12px rgba(255, 255, 255, 0.2)" : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "all 0.3s ease-in-out"
                            }}
                            onClick={() => handleOpen(service)}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={service.images[0]}
                                alt={service.title}
                                sx={{borderRadius: "12px 12px 0 0"}}
                            />
                            <CardContent>
                                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                                    {service.icon}
                                </Box>
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* CTA Section */}
            <Box textAlign="center" mt={5}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        borderRadius: 8,
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#1976D2",
                            transform: "scale(1.05)",
                        }
                    }}
                >
                    Hubungi Kami
                </Button>
            </Box>

            {/* Modal Detail Layanan */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: darkMode ? blueGrey[800] : common.white,
                        boxShadow: 24,
                        padding: "20px",
                        borderRadius: 4,
                        maxWidth: 500,
                        width: "90%",
                        textAlign: "center"
                    }}
                >
                    <IconButton onClick={prevImage}><ArrowBack/></IconButton>
                    <CardMedia
                        component="img"
                        height="200"
                        image={selectedService?.images[currentImage]}
                        sx={{borderRadius: "8px", mb: 2}}
                    />
                    <IconButton onClick={nextImage}><ArrowForward/></IconButton>
                    <Typography variant="h6" fontWeight={700}>{selectedService?.title}</Typography>
                    <Typography variant="body1">{selectedService?.description}</Typography>
                </Box>
            </Modal>
        </Box>
    );
};

export default memo(Services);
