import TransactionsTable from "@/components/TransactionsTable";
import FraudAlerts from "@/components/FraudAlerts";
import RiskChart from "@/components/RiskChart";
import Transactions from "@/components/Transactions";
import { Grid, Typography, Paper, Container } from "@mui/material";

export default function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
        Fraud Detection Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <FraudAlerts />
          </Paper>
          <Paper sx={{ p: 2 }}>
            <RiskChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <TransactionsTable />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Transactions />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
