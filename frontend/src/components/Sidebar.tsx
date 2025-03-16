"use client";
import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, Typography, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
    { text: "Transactions", icon: <ReceiptIcon />, path: "/transactions" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          transition: "width 0.3s ease-in-out",
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            boxSizing: "border-box",
            backgroundColor: "#1e1e2d",
            color: "#fff",
            transition: "width 0.3s ease-in-out",
          },
        }}
      >
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
          {open && (
            <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: 2 }}>
              Fraud Watch
            </Typography>
          )}
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => router.push(item.path)}
              sx={{
                "&:hover": { backgroundColor: "#27293d" },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
