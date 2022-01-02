import { Container, Grid } from "@mui/material";
import "./App.css";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={2} mr={5}>
          <Navbar></Navbar>
        </Grid>
        <Grid item lg={9.5}>
          <Home></Home>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
