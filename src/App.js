import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleGame from "./pages/singleGame";

function App() {
  return (
    <Router>
      <div className="App">
        <Box padding="20px">
          <Grid container>
            <Grid item lg={2} mr={5}>
              <Navbar></Navbar>
            </Grid>
            <Grid item lg={9.5} mt={10}>
              <Switch>
                <Route path="/games/:id">
                  <SingleGame />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Router>
  );
}

export default App;
