import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "../EmptyCart.png";
import { Notifications } from "@mui/icons-material";
import styled, { useTheme } from "styled-components";
import {
  ArrowBack,
  FavoriteOutlined,
  LocationOnOutlined,
  NotificationAdd,
  RestoreOutlined,
} from "@mui/icons-material";
import "./Header.css";
import { useEffect, useState } from "react";
import Header from "./Header";
function Cart() {
  useEffect(() => {
    let price = 0;
    selector.map((data) => {
      return (price = price + data.price);
    });
    setCount(price);
  }, []);
  const [count, setCount] = useState(0);

  const theme = useTheme();
  const selector = useSelector((state) => state.cart);

  console.log(selector);
  const navigate = useNavigate();

  const ButtonStyle = styled(Button)({
    backgroundColor: "orangered",
  });

  const PlaceOrderButton = styled(Button)({
    backgroundColor: "red",
  });
  console.log(selector.length);

  return (
    <Box>
      <Header
        state={<ArrowBack onClick={() => navigate("/details")} />}
        component="Cart"
        icon={<Notifications />}
      />
      {selector.length !== 0 ? (
        <div className="margin-to-cart">
          <Box>
            <Grid container columns={12}>
              <Grid xs={12} md={8}>
                <div className="border">
                  <Box marginBottom="10px">
                    <Card variant="outlined">
                      <Box height="50px">h</Box>
                    </Card>
                  </Box>
                  <Box marginBottom="10px">
                    <Card variant="outlined">
                      <Box height="50px">h</Box>
                    </Card>
                  </Box>
                  <Paper elevation={2}>
                    <div className="flow">
                      <Box height="100%" overflow="scroll">
                        <CardContent>
                          <Box>
                            {selector.map((data) => {
                              return (
                                <Box display="flex" marginBottom="10px">
                                  <img
                                    src={`${data.url}&raw=1`}
                                    width="150px"
                                    height="150px"
                                  />
                                  <Box marginLeft="10px">
                                    <Typography width="10rem">
                                      {data.name}
                                    </Typography>
                                    <Typography>₹{data.price}</Typography>
                                  </Box>
                                  <Divider />
                                </Box>
                              );
                            })}
                          </Box>
                        </CardContent>
                      </Box>
                    </div>

                    <div className="filter">
                      <Paper elevation={5}>
                        <Box height="80px" margin="10px">
                          <CardContent>
                            <Typography textAlign="end">
                              <ButtonStyle
                                variant="contained"
                                onClick={() => navigate("/myOrder")}
                              >
                                Place Order
                              </ButtonStyle>
                            </Typography>
                          </CardContent>
                        </Box>
                      </Paper>
                    </div>
                  </Paper>
                </div>
              </Grid>

              <Grid xs={12} md={4}>
                <div className="border">
                  <Box>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography color="gray">PRICE DETAILS</Typography>
                      </CardContent>
                      <Divider />
                      <CardContent>
                        <Box height="200px">
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            marginBottom="10px"
                          >
                            <Typography>
                              Price({selector.length} Item)
                            </Typography>

                            <Typography>₹{count}</Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            marginBottom="10px"
                          >
                            <Typography>Discount</Typography>

                            <Typography color="green">-₹{count}</Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            marginBottom="10px"
                          >
                            <Typography>Delivery Charges</Typography>

                            <Typography>₹{count}</Typography>
                          </Box>
                          <Divider />
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            margin="20px 0 20px 0"
                          >
                            <Typography fontWeight="bold">
                              Total Amount
                            </Typography>

                            <Typography fontWeight="bold">
                              ₹{count - count + count}
                            </Typography>
                          </Box>
                          <Divider />
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            margin="20px 0 20px 0"
                          >
                            <Typography
                              color="#388e3c"
                              fontSize="16px"
                              fontWeight="600"
                            >
                              You will save 300 on this order
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </div>
              </Grid>
            </Grid>

            <div className="show_pay_comp">
              <Box>
                <Paper elevation={3}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box display="flex" justifyContent="space-between">
                        <Typography textAlign="start" fontWeight="bold">
                          ₹{count}
                        </Typography>
                        <Typography>
                          <PlaceOrderButton
                            variant="contained"
                            onClick={() => navigate("/myOrder")}
                          >
                            Place Order
                          </PlaceOrderButton>
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Box>
            </div>
          </Box>
        </div>
      ) : (
        <Box marginTop="20rem">
          <Typography textAlign="center">
            <img src={EmptyCart} width="150px" />
          </Typography>
          <Box margin="10px" />
          <Typography textAlign="center"> Your Cart Is Empty</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Cart;

{
  /*
 <div className="show-buttons">
                  <Box>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography textAlign="end">
                          <Button
                            variant="contained"
                            onClick={() => navigate("/myOrder")}
                          >
                            Place Order
                          </Button>
                        </Typography>
                      </CardContent>
                    </Card>
                    </Box>
                       </div>





















                        <div className="border">
                    <Box>
                      <Card variant="outlined">
                        <CardContent>
                          <Box>
                            {selector.map((data) => {
                              return (
                                <Box display="flex" marginBottom="10px">
                                  <img
                                    src={`${data.url}&raw=1`}
                                    width="150px"
                                    height="150px"
                                  />
                                  <Box marginLeft="10px">
                                    <Typography width="10rem">
                                      {data.name}
                                    </Typography>
                                    <Typography>₹{data.price}</Typography>
                                  </Box>
                                  <Divider />

                                </Box>
                              );
                            })}
                       </Box>    </CardContent>
                        </Card>
                          </Box>
                          </div>
*/
}
