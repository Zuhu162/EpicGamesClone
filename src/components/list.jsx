import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function GamesList(props) {
  return (
    <div>
      <Typography variant="h6" color="white" mt={10}>
        {props.title}
      </Typography>
      <List>
        {props.games.map((game) => (
          <Link className="text-link" to={`/games/${game.id}`}>
            <ListItem
              button
              sx={{
                // bgcolor: selected === "Store" ? "#232323" : "inherit",
                color: "white",
                padding: "25px",
                "&:hover": {
                  backgroundColor: "#363636",
                },
                borderRadius: "10px",
              }}
            >
              <img
                src={game.img2}
                style={{ width: "50%", height: "100%" }}
                alt=""
              />
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText sx={{ ml: "20px" }}>{game.name}</ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default GamesList;
