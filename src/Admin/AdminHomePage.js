import { Card, CardContent, Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import { AddCard } from "@mui/icons-material";
import Dashboard from "./Dashboard";
import AdminCard from "./AdminCard";
import Users from "./Users";
import { Route, Routes } from "react-router-dom";

function AdminHomePage() {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
}

export default AdminHomePage;
