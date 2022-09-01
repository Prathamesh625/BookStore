import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AdminCard from "./AdminCard";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import Users from "./Users";

function Dashboard() {
  return (
    <Box>
      <AdminHeader />

      <Grid container column={12}>
        <Grid md={2}>
          <Box>
            <AdminSideBar />
          </Box>
        </Grid>
        <Grid md={10}>
          <Box margin="20px">
            <Paper elevation={4}>
              <CardContent>
                <Typography fontWeight="bold">Dashboard</Typography>
              </CardContent>

              <Box height="700px">
                <CardContent>
                  <Container>
                    <Box display="flex" marginTop="20px">
                      <Box margin="30px" />
                      <AdminCard />
                      <Box margin="30px" />
                      <AdminCard />
                      <Box margin="30px" />
                      <AdminCard />
                      <Box margin="20px" />
                    </Box>
                  </Container>
                  <Box marginTop="40px" />
                  <Container>
                    <Box margin="60px">
                      <Paper elevation={4}>
                        <Box height="400px">j</Box>
                      </Paper>
                    </Box>
                  </Container>
                </CardContent>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
