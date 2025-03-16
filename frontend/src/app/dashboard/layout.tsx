"use client";
import { ThemeProvider, CssBaseline, Box, Toolbar } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { darkTheme } from "@/styles/theme";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Ensures content is below the AppBar */}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
