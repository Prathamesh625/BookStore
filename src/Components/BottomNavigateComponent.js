import {
  AccountCircle,
  ArchiveOutlined,
  Category,
  CategoryOutlined,
  Favorite,
  Home,
  HomeMax,
  HomeMaxOutlined,
  HouseOutlined,
  RestorePageOutlined,
  ShoppingBag,
  ShoppingBagOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  BottomNavigationAction,
  BottomNavigation,
  Paper,
  Badge,
} from "@mui/material";

import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BottomNavigateComponent() {
  const cartValue = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() => navigate("/")}
            label="Home"
            icon={<HomeIcon style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            label="Category"
            icon={<Category style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            color="black"
            label="Orders"
            icon={<ShoppingBagOutlined style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            color="black"
            label="Orders"
            icon={<AccountCircle style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/myCart")}
            label="Cart"
            icon={
              <Badge badgeContent={cartValue.length} color="error">
                <ShoppingCart style={{ color: "black" }} />
              </Badge>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BottomNavigateComponent;
