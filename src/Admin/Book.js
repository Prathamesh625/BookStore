import { CheckBox, AddCircleOutline, Label } from "@mui/icons-material";
import "../Components/Header.css";
import {
  CardContent,
  Checkbox,
  Container,
  Divider,
  Grid,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card,
  Modal,
  InputBase,
  TextField,
  CardMedia,
  CardActions,
  Fab,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";

function Book() {
  const [book, setBook] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url = "https://bookapi-1.herokuapp.com/book/booklist";
  useEffect(() => {
    const booksFetching = async () => {
      const books = await axios.get(url);
      console.log(books.data);
      setBook(books.data);
    };

    booksFetching();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      <Box>
        <AdminHeader />

        <Grid container column={12}>
          <Grid md={2}>
            <Box>
              <AdminSideBar />
            </Box>
          </Grid>
          <Grid md={10}>
            <Box margin="30px">
              <Card variant="outlined">
                <Paper elevation={4}>
                  <CardContent>
                    <Typography fontWeight="bold">Books</Typography>
                  </CardContent>
                  <div className="flow">
                    <Box
                      height="700px"
                      width="100%"
                      overflow="scroll"
                      marginTop="10px"
                    >
                      <Container>
                        <Grid container>
                          {book.map((books) => {
                            return (
                              <Box margin="10px">
                                <Card sx={{ maxWidth: 345 }}>
                                  <CardContent>
                                    <Typography textAlign="center">
                                      <img
                                        src={`${books.imgurl}&raw=1`}
                                        width="150px"
                                        height="200px"
                                      />
                                    </Typography>
                                    <Typography
                                      gutterBottom
                                      variant="h6"
                                      component="div"
                                    >
                                      {books.name}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      Lizards are a widespread group of squamate
                                      reptiles, with over 6,000 species, ranging
                                      across all continents except Antarctica
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    <Button
                                      size="small"
                                      style={{
                                        color: "orange",
                                        textTransform: "none",
                                      }}
                                    >
                                      Update
                                    </Button>
                                    <Button
                                      size="small"
                                      style={{
                                        color: "orange",
                                        textTransform: "none",
                                      }}
                                    >
                                      Delete
                                    </Button>
                                    <Button
                                      size="small"
                                      style={{
                                        color: "orange",
                                        textTransform: "none",
                                      }}
                                    >
                                      View Details
                                    </Button>
                                  </CardActions>
                                </Card>
                              </Box>
                            );
                          })}

                          <Box
                            position="fixed"
                            bottom="10%"
                            right="5%"
                            onClick={handleOpen}
                          >
                            <Fab color="primary" aria-label="add">
                              <AddCircleOutline />
                            </Fab>
                          </Box>
                          <Modal open={open}>
                            <Box style={style} bgcolor="white" height="600px">
                              <Typography
                                fontWeight="bold"
                                textAlign="center"
                                fontSize="2rem"
                              >
                                Add Book
                              </Typography>
                              <Box marginTop="5%">
                                <Container>
                                  <TextField
                                    fullWidth="true"
                                    label="Book Name"
                                  />
                                  <Box margin="20px" />
                                  <TextField
                                    fullWidth="true"
                                    label="Book price"
                                  />
                                  <Box margin="20px" />
                                  <TextField
                                    fullWidth="true"
                                    label="Book info"
                                  />
                                  <Box margin="20px" />
                                  <TextField
                                    fullWidth="true"
                                    label="Book info"
                                  />
                                  <Box margin="20px" />
                                  <TextField
                                    fullWidth="true"
                                    label="discount"
                                  />
                                  <Box margin="20px" />
                                  <Box display="flex">
                                    <Button
                                      style={{
                                        backgroundColor: "orange",
                                        width: "100%",
                                        margin: "20px",
                                      }}
                                      variant="contained"
                                      onClick={() => setOpen(false)}
                                    >
                                      cancel
                                    </Button>
                                    <Button
                                      style={{
                                        backgroundColor: "orange",
                                        width: "100%",
                                        margin: "20px",
                                      }}
                                      variant="contained"
                                      onClick={() => setOpen(false)}
                                    >
                                      save
                                    </Button>
                                  </Box>
                                </Container>
                              </Box>
                            </Box>
                          </Modal>
                        </Grid>
                      </Container>
                    </Box>
                  </div>
                </Paper>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Book;
