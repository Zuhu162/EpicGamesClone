import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import fm from "../assets/fm2.jpg";
import bf4 from "../assets/bf42.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getCarouselGames } from "../services/gameInfo";
import { Link } from "react-router-dom";

function CarouselContainer() {
  const games = getCarouselGames();
  const images = [fm, bf4];
  const [selected, setSelected] = useState();
  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={10}>
          <Carousel
            autoPlay={true}
            showArrows={false}
            showThumbs={false}
            selectedItem={selected}
          >
            {games.map((game) => (
              <Link to={`/games/${game.id}`} className="text-link">
                <div>
                  <img
                    src={game.img2}
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt=""
                  />
                </div>
              </Link>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={0} lg={2}>
          <List>
            {games.map((game) => (
              <ListItem
                button
                onClick={() => setSelected(games.indexOf(game))}
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
                  src={game.img1}
                  style={{ width: "50%", height: "100%" }}
                  alt=""
                />
                <ListItemText sx={{ ml: "20px" }}>{game.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default CarouselContainer;
