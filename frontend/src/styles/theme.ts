import { createTheme } from "@mui/material/styles";

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00aaff" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#aaaaaa" },
  },
});

// Silver Theme
export const silverTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#444444" },
    background: { default: "#eeeeee", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#333333" },
  },
});
