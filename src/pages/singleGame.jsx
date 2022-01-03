import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleGame, getSpotLightGames } from "../services/gameInfo";

function SingleGame() {
  const { id } = useParams();
  const game = getSingleGame(id);
  getSpotLightGames();

  return (
    <div>
      <Box>
        <Typography color="white" variant="h3" mb={5}>
          {game.name}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={9}>
            <iframe width="100%" height="700px" src={game.link}></iframe>
          </Grid>
          <Grid item lg={3}>
            <img src={game.img2} width="100%" alt="" />
            <Typography color="white" mb={5}>
              <Grid container>
                {game.discount ? (
                  <div>
                    <Grid item xs={12} lg={4}>
                      <Chip
                        sx={{
                          bgcolor: "#0074E4",
                          color: "white",
                        }}
                        label={`-${game.discount}%`}
                      ></Chip>
                    </Grid>
                  </div>
                ) : null}
                {game.discount ? (
                  <Grid item xs={12} lg={4} mr={-7} mt={0.5} ml={2}>
                    <Typography
                      color="gray"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${game.price.toFixed(2)}
                    </Typography>
                  </Grid>
                ) : null}
                {game.discount ? (
                  <Grid item xs={12} lg={4} mt={0.5}>
                    <Typography color="white">
                      $
                      {(
                        game.price -
                        (game.discount * game.price) / 100
                      ).toFixed(2)}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs={12} lg={4}>
                    <Typography color="white">${game.price}</Typography>
                  </Grid>
                )}
              </Grid>
            </Typography>
            <Button
              variant="contained"
              sx={{ width: "100%", padding: "15px", mb: "20px" }}
            >
              Buy Now
            </Button>
            <Button variant="outlined" sx={{ width: "100%", padding: "15px" }}>
              Add to Cart
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "15px",
              }}
            >
              <Typography mt={3} color="gray">
                Publisher
              </Typography>
              <Typography mt={3} color="white">
                {game.publisher}
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "15px",
              }}
            >
              <Typography mt={3} color="gray">
                Release Date
              </Typography>
              <Typography mt={3} color="white">
                {game.release}
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Typography variant="h6" color="white">
              {game.desc}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SingleGame;
