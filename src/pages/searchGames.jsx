import React from "react";
import { getAllGames } from "../services/gameInfo";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function SearchGames(props) {
  const games = getAllGames();
  console.log(games);

  let foundGames = [];

  return (
    <div>
      <Grid container>
        {games
          .filter((game) =>
            game.name
              .toLocaleLowerCase()
              .includes(props.filter.toLocaleLowerCase())
          )
          .map((game) => (
            <Grid item lg={2} xs={6}>
              <Link className="text-link" to={`/games/${game.id}`}>
                <Box
                  sx={{
                    "&:hover": {
                      backgroundColor: "#363636",
                    },
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{ width: "100%", borderRadius: "10px" }}
                    src={game.img1}
                  ></img>
                  <Typography color="white">{game.name}</Typography>
                  <Typography
                    sx={{ color: "gray" }}
                    fontSize="12px"
                    color="white"
                  ></Typography>
                </Box>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default SearchGames;
