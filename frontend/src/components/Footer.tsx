import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 3, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} FraudShield. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="/privacy" color="inherit">Privacy Policy</Link> | <Link href="/terms" color="inherit">Terms of Service</Link>
      </Typography>
    </Box>
  );
}
