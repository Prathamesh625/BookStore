import { Card, CardContent, Container, TextField, Link } from "@mui/material";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { useState } from "react";

import styled from "styled-components";
import Header from "./Header";
import "./Header.css";

// TODO: Replace the following with your app's Firebase project configuration

function Login() {
  const SignInButton = styled(Button)({
    color: "white",
    textTransform: "none",
    width: "100%",
  });
  const GoogleButton = styled(Button)({
    color: "black",
    textTransform: "none",
    width: "100%",
  });
  const [open, setOpen] = useState();

  return (
    <Box bgcolor="white">
      <Header />
      {open === false ? (
        <Box margin="100px">
          <Typography textAlign="center" fontWeight="bold">
            Sign In
          </Typography>
          <Box margin="30px" />
          <TextField fullWidth label="Email" id="fullWidth" />
          <Box margin="30px" />{" "}
          <TextField fullWidth label="Password" id="fullWidth" />
          <Box margin="30px" />
          <SignInButton variant="contained">
            <Typography>Sign In</Typography>
          </SignInButton>
          <Box margin="30px" />
          <Typography>
            Don't have account then
            <Link onClick={() => setOpen(true)}>Sign Up</Link>
          </Typography>
          <Box margin="30px" />
          orr
          <GoogleButton variant="outlined">
            {" "}
            <Google />
            Sign In with Google
          </GoogleButton>
          <Box margin="30px" />
          <SignInButton variant="outlined">Sign In With Facebook</SignInButton>
        </Box>
      ) : (
        <Box margin="100px">
          <div className="margin-to-cart">
            <Typography textAlign="center" fontWeight="bold">
              Sign Up
            </Typography>
            <Box margin="30px" />
            <TextField fullWidth label="First Name" id="fullWidth" />
            <Box margin="30px" />
            <TextField fullWidth label="Last Name" id="fullWidth" />
            <Box margin="30px" />
            <TextField fullWidth label="Email" id="fullWidth" />
            <Box margin="30px" />
            <TextField fullWidth label="Password" id="fullWidth" />
            <Box margin="30px" />
            <TextField fullWidth label="Confirm Password" id="fullWidth" />
            <Box margin="30px" />
            <SignInButton variant="contained">Sign up</SignInButton>
            <Box margin="30px" />
            <Typography>
              If you are already a member
              <Link onClick={() => setOpen(false)}> Sign in</Link>
            </Typography>
          </div>
        </Box>
      )}
    </Box>
  );
}

export default Login;
