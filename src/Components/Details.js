import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import "./Details.css";
import "./Header.css";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { add } from "./Redux/cart";
import { Badge, BottomNavigation, CardContent } from "@mui/material";
import { AddBox, ArrowBack, ShoppingCart } from "@mui/icons-material";
import BottomNavigateComponent from "./BottomNavigateComponent";
import Cart from "./Cart";
function Details() {
  const s = useSelector((state) => state.book);
  const navigate = useNavigate();
  console.log(s);
  const location = useLocation();
  console.log(location.state);
  const getstate = useSelector((state) => state.cart);
  console.log(getstate);
  const dispatch = useDispatch();
  const action = () => {
    dispatch(add(s));
  };
  const details = useSelector((state) => state.details);
  console.log(details);
  const cartValue = useSelector((state) => state.cart);

  const ButtonStyle = styled(Button)({
    width: "100%",
    marginLeft: "10px",
  });

  const AddToCart = styled(Button)({
    width: "100%",
    backgroundColor: "orange",
    height: "50px",
  });

  return (
    <Box>
      <Header
        state={<ArrowBack onClick={() => navigate("/products")} />}
        component="details"
        icon={
          <Box onClick={() => navigate("/myCart")}>
            <Badge badgeContent={cartValue.length} color="error">
              <ShoppingCart />
            </Badge>
          </Box>
        }
      />
      <div className="margin-to-cart">
        <div>
          <Box bgcolor="white">
            <Grid container columns={12}>
              <Grid xs={12} md={5}>
                <Box>
                  <div className="border">
                    <div className="border">
                      <Box>
                        <CardContent>
                          <Card variant="outlined">
                            <Box height="500px">
                              <Typography textAlign="center" padding="10%">
                                <img
                                  src={`${s.url}&raw=1`}
                                  width="100%"
                                  height="400px"
                                />
                              </Typography>
                            </Box>
                          </Card>
                          <div className="show-buttons">
                            <Box display="flex" marginTop="20px">
                              <AddToCart
                                variant="contained"
                                onClick={() => action()}
                              >
                                Add To Cart
                              </AddToCart>
                              <Box marginRight="10px" />
                              <AddToCart variant="contained">
                                Add To Cart
                              </AddToCart>
                            </Box>
                          </div>
                        </CardContent>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Grid>

              <Grid xs={12} md={7}>
                <div className="border">
                  <Box>
                    <CardContent>
                      <Box height="300px">
                        <Typography>
                          {s.name} Samanya Gyan / General Knowledge In Hindi
                          Useful For SSC Railway Police Army Air Force Lekhpal
                        </Typography>
                        <Typography fontWeight="400" fontSize="2rem">
                          ₹{s.price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="show_pay_comp">
            <Box display="flex">
              <AddToCart onClick={() => action()} variant="contained">
                Add To Cart
              </AddToCart>
              <AddToCart variant="contained">Add To Cart</AddToCart>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Details;

/*




 <Box>
      <Box width="100%" marginRight="10%">
        <Box>
          <Grid container>
            <Box width="25rem" margin="20px">
              <Card variant="outlined">
                <CardContent>
                  <Grid xs={12} md={6}>
                    <Box textAlign="center">
                      <img src={`${s.url}&raw=1`} width="200px" />
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
              <div className="button">
                <Box>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid xs={12}>
                        <Box display="flex">
                          <ButtonStyle
                            variant="contained"
                            onClick={() => action()}
                          >
                            Add To Cart
                          </ButtonStyle>

                          <ButtonStyle variant="contained">Buy Now</ButtonStyle>
                        </Box>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </div>
            </Box>

            <Box width="25rem" margin="20px">
              <Card variant="outlined">
                <CardContent>
                  <Grid xs={12} md={6}>
                    <Box>
                      <Typography fontWeight="bold">{s.name}</Typography>
                      <Typography fontWeight="bold" fontSize="2rem">
                        ₹{s.price}
                      </Typography>
                      <Typography color="green">40% off</Typography>
                      <Typography>{s.information}</Typography>
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
              <Box marginTop="20px">
                <Card variant="outlined">
                  <CardContent>
                    <Grid xs={12} md={6}>
                      <Box>
                        <Typography fontWeight="bold">
                          Specifications
                        </Typography>
                      </Box>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
              <Box marginTop="20px">
                <Card variant="outlined">
                  <CardContent>
                    <Grid xs={12} md={6}>
                      <Box>
                        <Typography fontWeight="bold">
                          Rating & Reviews
                        </Typography>
                        <Rating />
                      </Box>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>












*/
