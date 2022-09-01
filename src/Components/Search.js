import { ArrowBack, Notifications } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { products_list } from "./Redux/product";

function Search() {
  const location = useLocation();
  const dispatch = useDispatch();
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

  const selector = useSelector((state) => state.products);
  console.log(selector);
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  console.log(book);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const booksData = async () => {
      const fetched_books = await axios.get(
        "https://bookapi-1.herokuapp.com/book/booklist"
      );
      setBook(fetched_books.data);
    };
    booksData();
  }, []);
  console.log(book);

  useEffect(() => {
    dispatch(products_list(book));
  }, []);

  return (
    <Box>
      <Header
        state={<ArrowBack onClick={() => navigate("/details")} />}
        input={
          <InputBase
            placeholder="Search for books "
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            style={{ width: "100%", height: "40px" }}
          />
        }
        icon={<Notifications />}
      />
      {data.map((m) => {
        if (
          m.name
            .toLowerCase()
            .includes(inputValue.toLowerCase() || location.state)
        )
          return <li>{m.name}</li>;
      })}
    </Box>
  );
}

export default Search;
