import { CheckBox } from "@mui/icons-material";
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
  InputBase,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";

function Users() {
  const [user, setUser] = useState([]);

  const url = "https://bookapi-1.herokuapp.com/new/users";
  useEffect(() => {
    const usersFetching = async () => {
      const users = await axios.get(url);
      console.log(users.data);
      setUser(users.data);
    };

    usersFetching();
  }, []);

  return (
    <Box>
      <AdminHeader />

      <Grid container column={12}>
        <Grid md={2}>
          <Box>
            <AdminSideBar />
          </Box>
        </Grid>
        <Grid md={10}>
          <div className="flow">
            <Box margin="20px">
              <Paper elevation={4}>
                <CardContent>
                  <Typography fontWeight="bold">Dashboard</Typography>
                </CardContent>

                <Box
                  height="700px"
                  overflow="scroll"
                  display="flex"
                  marginTop="10px"
                >
                  <Box marginLeft="5%">
                    <Container>
                      <Table>
                        <Box>
                          <TableBody>
                            {user.map((user) => {
                              return (
                                <Box>
                                  <Paper>
                                    <TableRow>
                                      <TableCell component="th" scope="row">
                                        <Checkbox />
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography padding="10%">
                                          {user._id}
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography padding="10%">
                                          {user.email}
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography
                                          padding="10%"
                                          marginLeft="60px"
                                        >
                                          <Button>view </Button>
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography
                                          padding="10%"
                                          marginLeft="60px"
                                        >
                                          <Button>update </Button>
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography marginLeft="60px">
                                          <Button>delete </Button>
                                        </Typography>
                                      </TableCell>
                                    </TableRow>
                                  </Paper>
                                </Box>
                              );
                            })}
                          </TableBody>
                        </Box>
                      </Table>
                    </Container>
                  </Box>
                  <Divider />
                </Box>
              </Paper>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Users;

/*

 <Box display="flex">
                        <Typography>
                          <CheckBox />
                        </Typography>
                        <Box margin="30px" />
                        <Typography>user Id</Typography>
                        <Box margin="50px" />
                        <Typography>Email Id</Typography>
                        <Box margin="50px" />
                        <Button>view </Button>
                        <Box margin="50px" />
                        <Typography>update user</Typography>
                        <Box margin="50px" />
                        <Typography>delete user</Typography>
                        <Box margin="50px" />
                        <Typography>Email Id</Typography>
       
       
       
                        </Box>











                         <TableRow>
                                      <TableCell component="th" scope="row">
                                        <Checkbox />
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography>{user._id}</Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography>{user.email}</Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography>
                                          <Button>view </Button>
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography>
                                          <Button>update </Button>
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Typography>
                                          <Button>delete </Button>
                                        </Typography>
                                      </TableCell>
                                    </TableRow>
*/
