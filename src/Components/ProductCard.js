import {
  BadgeOutlined,
  BadgeRounded,
  RateReview,
  Star,
} from "@mui/icons-material";
import {
  Badge,
  BadgeMark,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import { add } from "./Redux/details";

function ProductCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fun = (value) => {
    navigate("/details");
    dispatch(add(props.product));
  };
  return (
    <Box onClick={fun}>
      <Card variant="outlined">
        <CardContent>
          <Box height="300px">
            <Box textAlign="center" height="200px">
              <img
                src={`${props.product.imgurl}&raw=1`}
                width="150px"
                height="200px"
              />
            </Box>
            <Typography>{props.product.name}</Typography>

            <Typography fontWeight="bold">₹{props.product.price}</Typography>

            <Rating />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductCard;
