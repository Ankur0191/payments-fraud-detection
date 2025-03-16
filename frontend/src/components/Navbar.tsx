"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          FraudShield
        </Typography>

        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} href="/sign-in">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
