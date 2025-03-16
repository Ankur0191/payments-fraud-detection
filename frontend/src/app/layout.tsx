"use client";
import { type Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider, AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import { useState } from "react";
import { darkTheme, silverTheme } from "@/styles/theme";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

// export const metadata: Metadata = {
//   title: "FraudShield - Secure Payments",
//   description: "AI-powered fraud detection system.",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            
            {/* Navbar */}
            <AppBar position="sticky" sx={{ bgcolor: "background.paper" }}>
              <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "primary.main" }}>FraudShield</Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <SignedOut>
                    <SignInButton>
                      <Button color="inherit">Login</Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button color="inherit">Register</Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <ThemeToggle onToggle={() => setTheme(theme.palette.mode === "dark" ? silverTheme : darkTheme)} />
                </Box>
              </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Hero />

            {/* Main Content */}
            <Container maxWidth="lg">{children}</Container>

            {/* Footer */}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
