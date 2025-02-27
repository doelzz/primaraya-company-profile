import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled, useTheme, keyframes } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface HeroSectionProps {
    isDarkMode: boolean;
}

const services = [
    { title: "Supplier & Trading", image: "/assets/hero/supplier.jpg" },
    { title: "Mechanical & Electrical", image: "/assets/hero/mechanical.jpg" },
    { title: "Advertising & Printing", image: "/assets/hero/advertising.jpg" },
    { title: "Carton Box Packaging", image: "/assets/hero/packaging.jpg" },
    { title: "Medical Supply", image: "/assets/hero/medical.jpg" },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    position: "relative",
    backgroundImage: `linear-gradient(135deg, ${theme.palette.mode === "dark" ? "#121212" : "#1e3c72"}, ${theme.palette.mode === "dark" ? "#333" : "#2a5298"})`,
    animation: `${fadeIn} 1s ease-out`,
    padding: "20px",
}));



const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
});

const HeroContent = styled(Box)({
    position: "relative",
    zIndex: 2,
    textAlign: "left",
    color: "white",
    animation: `${fadeIn} 1s ease-out`,
});

const SwiperWrapper = styled(Swiper)({
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
});

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
    const theme = useTheme();

    return (
        <HeroContainer id="hero">
            <Overlay />
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} mt={3}>
                        <HeroContent>
                            <Typography variant="h3" fontWeight="bold" mb={2}>
                                PT. Primaraya Graha Nusantara
                            </Typography>
                            <Typography variant="h5" mb={4} sx={{ color: theme.palette.grey[300] }}>
                                Solusi terpercaya dalam bidang Supplier, Trading, Mechanical & Electrical, Advertising & Printing, Packaging, dan Medical Supply.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    borderRadius: "24px",
                                    px: 4,
                                    py: 1,
                                    textTransform: "none",
                                    boxShadow: 3,
                                    "&:hover": { backgroundColor: theme.palette.primary.dark },
                                }}
                            >
                                Hubungi Kami
                            </Button>
                        </HeroContent>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SwiperWrapper
                            pagination={{ clickable: true }}
                            navigation
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop
                            modules={[Pagination, Navigation, Autoplay]}
                            aria-label="Carousel layanan perusahaan"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            height: { xs: 250, md: 300 },
                                            backgroundImage: `url(${service.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                                            backgroundBlendMode: "overlay",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            borderRadius: "8px",

                                        }}
                                    >
                                        <Typography variant="h4" fontWeight="bold">
                                            {service.title}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </SwiperWrapper>
                    </Grid>
                </Grid>
            </Container>
        </HeroContainer>
    );
};

export default HeroSection;
