"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from "@mui/material";

const TransactionsTable = () => {
  const [transactions] = useState([
    { id: "TXN001", user: "John Doe", amount: "$500", risk: "Low" },
    { id: "TXN002", user: "Jane Smith", amount: "$10,000", risk: "High" },
    { id: "TXN003", user: "Alice Brown", amount: "$1,200", risk: "Medium" },
    { id: "TXN004", user: "Michael Lee", amount: "$25,000", risk: "High" },
  ]);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Recent Transactions
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Risk Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((txn) => (
            <TableRow key={txn.id}>
              <TableCell>{txn.id}</TableCell>
              <TableCell>{txn.user}</TableCell>
              <TableCell>{txn.amount}</TableCell>
              <TableCell>
                <Chip label={txn.risk} color={getRiskColor(txn.risk)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
