import { Box, Button, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import styled from "styled-components";

function Cards(props) {
  const Img = styled("img")`
    &:hover {
      transform: scale(1.04);
      width: "100%";
    }
  `;
  return (
    <Box marginRight="5px" height="250px">
      <CardContent>
        <Box height="200px">
          <Img
            src={`${props.state.imgurl}&raw=1`}
            width="150px"
            height="200px"
          />
        </Box>
        <Typography> Great Book</Typography>
      </CardContent>
    </Box>
  );
}

export default Cards;
