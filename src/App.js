import { Box, Container, Grid, TextField } from "@mui/material";
import "./App.css";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleGame from "./pages/singleGame";
import Library from "./pages/library";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchGames from "./pages/searchGames";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Router>
      <div className="App">
        <Box
          sx={{
            width: "80%",
            textAlign: "center",
            display: {
              xs: "none",
              md: "block",
              top: "5px",
              left: "10%",
              position: "sticky",
              zIndex: "2000",
            },
          }}
        >
          <SearchIcon
            sx={{ mt: "15px", mr: "10px", color: "white" }}
          ></SearchIcon>
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: "40px",
              width: "40%",
              height: "50px",
            }}
            onChange={(e) => setSearch(e.currentTarget.value)}
            placeholder="Search"
          ></TextField>
        </Box>
        <Box padding="40px">
          <Grid container spacing={5}>
            <Grid item display={{ xs: "1" }} xl={2}>
              <Navbar></Navbar>
            </Grid>
            <Grid item xl={10}>
              {search.length <= 2 ? (
                <Switch>
                  <Route path="/games/:id">
                    <SingleGame />
                  </Route>
                  <Route path="/library">
                    <Library />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              ) : (
                <SearchGames filter={search} />
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Router>
  );
}

export default App;
