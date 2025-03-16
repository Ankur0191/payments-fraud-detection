"use client";

import { Container, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Fraud Detection System
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        An AI-powered system to detect and prevent fraudulent transactions.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Container>
  );
}
