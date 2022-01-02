import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

function GamesList(props) {
  return (
    <div>
      <Typography variant="h6" color="white" mt={10}>
        New Releases
      </Typography>
      <List>
        {props.games.map((game) => (
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
            <img src={game} style={{ width: "50%", height: "100%" }} alt="" />
            <Grid container>
              <Grid item xs={12}>
                <ListItemText sx={{ ml: "20px" }}>Game Title</ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText sx={{ ml: "20px" }}>$20.99</ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GamesList;
