"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { name: "Low Risk", value: 60, color: "#4caf50" },
  { name: "Medium Risk", value: 25, color: "#ff9800" },
  { name: "High Risk", value: 15, color: "#f44336" },
];

const RiskChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Risk Score Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RiskChart;
