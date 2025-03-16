"use client";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
    { text: "Transactions", icon: <ReceiptIcon />, path: "/transactions" },
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem component="button" key={item.text} onClick={() => router.push(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
