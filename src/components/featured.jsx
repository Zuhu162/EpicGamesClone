import React from "react";
import { Chip, Grid, List, ListItemText, Typography } from "@mui/material";
import { getFeaturedGames } from "../services/gameInfo";
import { Link } from "react-router-dom";

function Featured(props) {
  const games = props.games;
  return (
    <div>
      <Grid container spacing={2}>
        {games.map((game) => (
          <Grid item xs={12} lg={6}>
            <div>
              <Link className="text-link" to={`/games/${game.id}`}>
                <img
                  src={game.img2}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    marginRight: "20px",
                  }}
                  alt=""
                />
                <Typography sx={{ color: "white", mt: "5px" }}>
                  {game.name}
                </Typography>
              </Link>
              <Typography
                sx={{ color: "gray", mt: "5px", mb: "10px", fontSize: "12px" }}
              >
                {game.desc}
              </Typography>
              <Grid container>
                {game.discount ? (
                  <div>
                    <Grid item xs={12} lg={12}>
                      <Chip
                        sx={{
                          bgcolor: "#0074E4",
                          color: "white",
                          mr: "10px",
                        }}
                        label={`-${game.discount}%`}
                      ></Chip>
                    </Grid>
                  </div>
                ) : null}
                {game.discount ? (
                  <Grid item xs={12} lg={2} mr={-5}>
                    <Typography
                      color="gray"
                      variant="h5"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${game.price.toFixed(2)}
                    </Typography>
                  </Grid>
                ) : null}

                {game.discount ? (
                  <Grid item xs={12} lg={4}>
                    <Typography color="white" variant="h5">
                      $
                      {(
                        game.price -
                        (game.discount * game.price) / 100
                      ).toFixed(2)}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs={12} lg={2}>
                    <Typography color="white">${game.price}</Typography>
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Featured;
