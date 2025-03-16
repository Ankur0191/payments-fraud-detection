"use client";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backdropFilter: "blur(15px)", // Glassmorphism Effect
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "40px",
        color: "white",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Secure Online Payments
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "600px", marginTop: 2 }}>
        AI-powered fraud detection system to protect your transactions in real-time.
      </Typography>
      <Button variant="contained" sx={{ marginTop: 4, backgroundColor: "#00aaff", color: "white" }}>
        Get Started
      </Button>
    </Box>
  );
}
