import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ProductCard from "./ProductCard";
import "./Header.css";
import Header from "./Header";
import { ArrowBack, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function Products() {
  const navigate = useNavigate();
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
  return (
    <Box>
      <Header state={<ArrowBack onClick={() => navigate("/")} />} />
      <div className="show_filter_comp">
        <Box>
          <Typography textAlign="center" fontWeight="bold">
            <Accordion>
              <AccordionSummary>
                <Typography>Filter</Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </Typography>
        </Box>
      </div>

      <Grid container columns={12}>
        <Grid xs={12} md={2}>
          <div className="filter">
            <Box margin="10px">
              <Card variant="outlined">
                <CardContent>
                  <Typography fontWeight="bold">Filter</Typography>
                </CardContent>
                <Divider />

                <Box height="800px">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography> Latest </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="New Arrived"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="old Editions"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="100 to  500"
                      />
                    </AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="100 to  500"
                    />
                    <AccordionDetails>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Marathi"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="English"
                      />
                      <FormControlLabel control={<Checkbox />} label="Hindi" />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography> Editions </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Marathi"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="English"
                      />
                      <FormControlLabel control={<Checkbox />} label="Hindi" />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography> Price </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Above 100"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Below 600"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Below 600"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="100 to 300"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="100 to  500"
                      />
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography></Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Card>
            </Box>
          </div>
        </Grid>

        <Grid xs={12} md={10}>
          <div className="border">
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <Typography fontWeight="bold">Books</Typography>
                </CardContent>
                <Grid container columns={12}>
                  {data.map((card) => {
                    return (
                      <Grid xs={6} md={3}>
                        <ProductCard product={card} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Card>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
