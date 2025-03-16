import Sidebar from "@/components/Sidebar";
import TransactionsTable from "@/components/TransactionsTable";
import FraudAlerts from "@/components/FraudAlerts";
import RiskChart from "@/components/RiskChart";
import { Box, Grid, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Fraud Detection Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <TransactionsTable />
          </Grid>
          <Grid item xs={12} md={4}>
            <FraudAlerts />
            <RiskChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
