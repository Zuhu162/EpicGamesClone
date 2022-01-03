import React from "react";
import { Chip, Grid, List, ListItemText, Typography } from "@mui/material";
import { getFeaturedGames } from "../services/gameInfo";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

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
              <Box sx={{ height: "100px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    mt: "5px",
                    mb: "10px",
                    fontSize: "12px",
                  }}
                >
                  {game.desc}
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} lg={1.5} xl={1}>
                  {game.discount ? (
                    <Chip
                      sx={{
                        bgcolor: "#0074E4",
                        color: "white",
                        mr: "10px",
                      }}
                      label={`-${game.discount}%`}
                    ></Chip>
                  ) : null}
                </Grid>
                <Grid item xs={12} lg={2} xl={1.5}>
                  {game.discount ? (
                    <Typography
                      color="gray"
                      variant="h5"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${game.price.toFixed(2)}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} lg={2} xl={1}>
                  {game.discount ? (
                    <Typography color="white" variant="h5">
                      $
                      {(
                        game.price -
                        (game.discount * game.price) / 100
                      ).toFixed(2)}
                    </Typography>
                  ) : (
                    <Typography color="white">${game.price}</Typography>
                  )}
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Featured;
