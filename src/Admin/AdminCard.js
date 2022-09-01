import { AddCard } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function AdminCard() {
  return (
    <Box width="300px">
      <Paper elevation={5}>
        <Box height="150px">
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography color="orange" fontWeight="bold">
                40 users
              </Typography>
              <Typography>
                <CircularProgress variant="determinate" value={70} />
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Paper>
    </Box>
  );
}

export default AdminCard;
