import React from "react";
import logo from "./logo.svg";
import Cart from "./Components/Cart";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BottomNavigationAction } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Switch, Box, Button } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Order from "./Components/Order";
import Products from "./Components/Products";
import Search from "./Components/Search";
import Login from "./Components/Login";
import BottomNavigateComponent from "./Components/BottomNavigateComponent.js";
import { SearchOff } from "@mui/icons-material";
import AdminHomePage from "./Admin/AdminHomePage";
import Users from "./Admin/Users";
import Book from "./Admin/Book";

function App() {
  return (
    <div>
      <Box marginTop="60px" bgcolor="#f1f3f6" height="800px">
        <Routes>
          <Route index="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/myCart" element={<Cart />} />
          <Route path="/myOrder" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/adminHomepage" element={<AdminHomePage />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/book" element={<Book />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
