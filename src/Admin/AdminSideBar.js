import {
  Avatar,
  Card,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <Box width="100%">
      <Box height="750px" bgcolor="orangered">
        <Box>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography color="black" fontWeight="bold">
                  <Avatar />
                </Typography>
              </ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/adminHomepage")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography color="black" fontWeight="bold">
                  Dashboard
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/admin/book")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography color="black" fontWeight="bold">
                  Books
                </Typography>
              </ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => navigate("/admin/users")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography color="black" fontWeight="bold">
                  Users
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography color="black" fontWeight="bold">
                  Payments
                </Typography>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText fontWeight="bold">
                <Typography color="black" fontWeight="bold">
                  Inbox
                </Typography>
              </ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminSideBar;
