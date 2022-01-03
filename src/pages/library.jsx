import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { getLibraryGames } from "../services/gameInfo";

const games = getLibraryGames();

function Library(props) {
  return (
    <div>
      <Grid container>
        {games.map((game) => (
          <Grid item lg={2} xs={12}>
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
              <Typography sx={{ color: "gray" }} fontSize="12px" color="white">
                Launch ▶
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Library;
