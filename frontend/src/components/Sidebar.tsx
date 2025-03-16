"use client";
import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Users", icon: <PeopleIcon />, path: "/dashboard#users" }, // Scrolls to Users
    { text: "Transactions", icon: <ReceiptIcon />, path: "/dashboard#transactions" }, // Scrolls to Transactions
  ];

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          top: 20,
          left: open ? 250 : 20,
          zIndex: 2000,
          color: "#fff",
          backgroundColor: open ? "transparent" : "#1e1e2d",
        }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#1e1e2d",
            color: "#fff",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
            Fraud Watch
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => {
                if (item.path.startsWith("/dashboard#")) {
                  const section = document.querySelector(item.path.replace("/dashboard", ""));
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                } else {
                  router.push(item.path);
                }
              }}
              sx={{
                backgroundColor: pathname === item.path ? "#27293d" : "transparent",
                "&:hover": { backgroundColor: "#343654" },
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
