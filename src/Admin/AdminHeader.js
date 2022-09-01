import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function AdminHeader() {
  return (
    <Box>
      <AppBar style={{ backgroundColor: "orangered", height: "80px" }}>
        <Toolbar>
          <Typography fontWeight="bold">Bookstore Admin</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AdminHeader;
