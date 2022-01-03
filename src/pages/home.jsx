import { Box, Grid } from "@mui/material";
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
  getFreeGames,
  getMostPopularGames,
  getSpotLightGames,
} from "../services/gameInfo";

function Home() {
  const images = [fm, bf4];
  const spotLightGames = getSpotLightGames();
  const popularGames = getMostPopularGames();
  const featuredGames = getFeaturedGames();
  const featuredGames2 = getFeaturedGames2();
  const freeGames = getFreeGames();

  const topSellers = [popularGames[3], spotLightGames[0]];
  const newReleases = [spotLightGames[4], spotLightGames[1]];
  const recentlyUpdated = [spotLightGames[5], spotLightGames[6]];

  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={3}>
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
            <GamesList games={newReleases} title={"New Releases"}></GamesList>
          </Grid>
          <Grid item xs={12} lg={4}>
            <GamesList games={topSellers} title={"Top Sellers"}></GamesList>
          </Grid>
          <Grid item xs={12} lg={4}>
            <GamesList
              games={recentlyUpdated}
              title={"Recently Updated"}
            ></GamesList>
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
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
