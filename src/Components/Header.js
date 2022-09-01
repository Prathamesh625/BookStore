import {
  ShoppingCart,
  Notifications,
  Search,
  Menu,
  SupervisedUserCircle,
  SupervisedUserCircleOutlined,
  SearchOutlined,
  ArrowBack,
} from "@mui/icons-material";
import "./Header.css";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  Badge,
  Input,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Drawer,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import "./Header.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Header(props) {
  const cartValue = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <AppBar style={{ backgroundColor: "orange" }}>
      <Drawer>hello</Drawer>
      <Toolbar>
        <Box display="flex">
          <div className="hide">{props.state}</div>
          <div className="hide">
            <Box marginLeft="15%" width="100%">
              <Typography fontWeight="bold" color="black">
                {props.component}
              </Typography>
            </Box>
          </div>
        </Box>
        <Box
          width="65%"
          left="15%"
          position="fixed"
          alignSelf="center"
          backgroundColor="white"
          marginLeft="2%"
          marginRight="6%"
          paddingLeft="2%"
        >
          <div className="hide">{props.input} </div>
        </Box>
        <Box
          width="40%"
          left="15%"
          position="fixed"
          alignSelf="center"
          backgroundColor="white"
          marginLeft="2%"
          marginRight="6%"
          paddingLeft="2%"
        >
          <div className="show">
            <Box display="flex">
              <InputBase
                placeholder="Search for books , available with new editions"
                style={{ width: "100%", height: "40px" }}
              />
              <Typography color="black" alignSelf="end" border="2px black">
                <Search />
              </Typography>
            </Box>
          </div>
        </Box>

        <Box position="fixed" right="20px" display="flex">
          <div className="hide">{props.icon}</div>
        </Box>

        <div className="show">
          <Box
            style={{
              position: "fixed",
              alignSelf: "center",

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              style={{
                position: "fixed",
                alignSelf: "center",
                width: "10%",
                right: "30%",
              }}
            >
              Login
            </Button>
            <Box position="fixed" alignSelf="center" display="flex" right="10%">
              <Box display="flex">
                <Badge badgeContent={6} color="error">
                  <Notifications />
                </Badge>
              </Box>
              <Box marginLeft="30px" right="10%" />
              <Box onClick={() => navigate("/myCart")} display="flex">
                <Badge badgeContent={cartValue.length} color="error">
                  <ShoppingCart />
                </Badge>
                <Typography fontWeight="bold">Cart</Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
