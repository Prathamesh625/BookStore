import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import {
  ButtonBase,
  Card,
  CardContent,
  Divider,
  Grid,
  InputBase,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Header.css";
import { add } from "./Redux/details";
import Cards from "./Cards";
import styled from "styled-components";
import BottomNavigateComponent from "./BottomNavigateComponent.js";
import Header from "./Header";
import { ArrowBack, Menu, Notifications, Search } from "@mui/icons-material";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [data] = useState([
    {
      _id: "62e10d9998c849dacd90e678",
      name: "lucents Gk",
      price: 120,
      information: "no 1 book",
      imgurl: "https://www.dropbox.com/s/yyailvyhnkxgsaa/lucentbook.jpg?dl=0",
      __v: 0,
    },

    {
      _id: "62e1129498c849dacd90e67c",
      name: "Eng & Mar Grammer Que Bank",
      title: "mpsc",
      price: 540,
      information: "great book",
      imgurl: "https://www.dropbox.com/s/u86cjh74dihs2jy/Mpsc.jpg?dl=0",
      __v: 0,
    },
    {
      _id: "62e112aa98c849dacd90e67e",
      name: "Paryavaran parishitiki",
      title: "mpsc",
      price: 340,
      information: "great book",
      imgurl: "https://www.dropbox.com/s/dp8pcublbidqfq4/Paryavaran.jpg?dl=0",
      __v: 0,
    },
    {
      _id: "62e112c698c849dacd90e680",
      name: "lucents GK",
      title: "mpsc",
      price: 120,
      information: "great book",
      imgurl: "https://www.dropbox.com/s/yyailvyhnkxgsaa/lucentbook.jpg?dl=0",
      __v: 0,
    },
    {
      _id: "62e112d598c849dacd90e682",
      name: "lucents Gk",
      price: 120,
      information: "no 1 book",
      imgurl: "https://www.dropbox.com/s/yyailvyhnkxgsaa/lucentbook.jpg?dl=0",
      __v: 0,
    },
  ]);

  const [category] = useState([
    { title: "mpsc" },
    { title: "upsc" },
    { title: "novels" },
    { title: "Stories" },
    { title: "others" },
  ]);

  const fun = (value) => {
    navigate("/products");
    dispatch(add(value));
  };

  return (
    <Box height="130%">
      <Header
        state={<Menu />}
        input={
          <Box display="flex">
            <InputBase
              placeholder="Search for books "
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              style={{ width: "100%", height: "40px" }}
            />
            <Box color="black" alignSelf="center">
              <ButtonBase
                onClick={() => navigate("/search", { state: inputValue })}
              >
                <Search />
              </ButtonBase>
            </Box>
          </Box>
        }
        icon={<Notifications />}
      />

      <div className="flow">
        <Box marginBottom="10px">
          <Card variant="outlined">
            <Container>
              <Box
                display="flex"
                overflow="scroll"
                marginBottom="10px"
                bgcolor="#fff"
              >
                {data.map((n) => {
                  return (
                    <Box padding={1} borderColor="gray" marginRight="10%">
                      <img
                        src={`${n.imgurl}&raw=1`}
                        width="50px"
                        height="50px"
                      />
                      <Typography>Mpsc</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Container>
          </Card>
        </Box>
      </div>
      <div className="border">
        <div className="flow">
          <Box marginBottom="10px">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Best Of Mpsc</Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/products")}
                  >
                    View All
                  </Button>
                </Box>
              </CardContent>
              <Divider />
              <Box display="flex" overflow="scroll">
                {data.map((n) => {
                  return (
                    <Box onClick={() => fun(n)} padding="2%">
                      <Cards state={n} />
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>
        </div>

        <div className="flow">
          <Box marginBottom="10px">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Best Of Upsc</Typography>

                  <Button
                    variant="contained"
                    onClick={() => navigate("/products")}
                  >
                    View All
                  </Button>
                </Box>
              </CardContent>
              <Divider />
              <Box display="flex" overflow="scroll">
                {data.map((n) => {
                  return (
                    <Box onClick={() => fun(n)} padding="2%">
                      <Cards state={n} />
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>
        </div>
        <div className="flow">
          <Box marginBottom="10px">
            <Card variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Novels</Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/products")}
                  >
                    View All
                  </Button>
                </Box>
              </CardContent>
              <Divider />
              <Box display="flex" overflow="scroll">
                {data.map((n) => {
                  return (
                    <Box onClick={() => fun(n)} padding="2%">
                      <Cards state={n} />
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>
        </div>
      </div>

      <Box m={10} />
      <div className="hide">
        <BottomNavigateComponent />
      </div>
    </Box>
  );
}

export default Home;
