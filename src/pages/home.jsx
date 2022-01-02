import { Grid } from "@mui/material";
import React from "react";
import Carousel from "../components/carousel";
import CarouselSmall from "../components/carousel-small";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Carousel></Carousel>
          <CarouselSmall></CarouselSmall>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
