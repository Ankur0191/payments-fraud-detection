"use client";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeToggle({ onToggle }: { onToggle: () => void }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <IconButton
      onClick={() => {
        setDarkMode(!darkMode);
        onToggle();
      }}
      color="inherit"
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
