"use client";
import { useState } from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const FraudAlerts = () => {
  const [alerts] = useState([
    { message: "High-risk transaction detected: TXN002", severity: "High" },
    { message: "User login from unusual location", severity: "Medium" },
    { message: "Multiple failed login attempts", severity: "Low" },
  ]);

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      default:
        return "black";
    }
  };

  return (
    <Card sx={{ mt: 3, mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fraud Alerts
        </Typography>
        <List>
          {alerts.map((alert, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={alert.message}
                primaryTypographyProps={{ style: { color: getAlertColor(alert.severity) } }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FraudAlerts;
