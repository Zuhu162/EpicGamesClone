import { Grid } from "@mui/material";
import React from "react";
import Carousel from "../components/carousel";
import CarouselSmall from "../components/carousel-small";
import Featured from "../components/featured";
import fm from "../assets/fm2.jpg";
import bf4 from "../assets/bf42.jpg";
import GamesList from "../components/list";
import {
  getFeaturedGames,
  getFeaturedGames2,
  getMostPopularGames,
  getSpotLightGames,
} from "../services/gameInfo";

function Home() {
  const images = [fm, bf4];
  const spotLightGames = getSpotLightGames();
  const popularGames = getMostPopularGames();
  const featuredGames = getFeaturedGames();
  const featuredGames2 = getFeaturedGames2();

  return (
    <div>
      <Grid container spacing={3} mb={10}>
        <Grid item>
          <Carousel></Carousel>
          <CarouselSmall
            title={"Special Sale Spotlight ⬇"}
            items={spotLightGames}
          ></CarouselSmall>
        </Grid>
        <Grid item xs={12}>
          <Featured games={featuredGames}></Featured>
        </Grid>
        <Grid item xs={12} lg={4}>
          <GamesList games={images}></GamesList>
        </Grid>
        <Grid item xs={12} lg={4}>
          <GamesList games={images}></GamesList>
        </Grid>
        <Grid item xs={12} lg={4}>
          <GamesList games={images}></GamesList>
        </Grid>
        <Grid item xs={12}>
          <Featured games={featuredGames2}></Featured>
        </Grid>
        <Grid item xs={12}>
          <CarouselSmall
            title={"Most Popular ⬇"}
            items={popularGames}
          ></CarouselSmall>
        </Grid>
        <Grid item xs={12}>
          <CarouselSmall items={[]}></CarouselSmall>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
