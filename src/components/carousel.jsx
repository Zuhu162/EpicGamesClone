import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import fm from "../assets/footballmanager.jpg";
import bf4 from "../assets/bf4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselContainer() {
  const images = [fm, bf4];
  const [selected, setSelected] = useState();
  const handleSelect = (item) => {
    setSelected(item);
  };
  console.log(selected);

  return (
    <div>
      <Grid container mt={10}>
        <Grid item xs={10} mr={2}>
          <Carousel
            autoPlay={true}
            showArrows={false}
            showThumbs={false}
            selectedItem={selected}
          >
            {images.map((img) => (
              <div>
                <img
                  src={img}
                  style={{ width: "100%", borderRadius: "20px" }}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={1.8}>
          <List>
            {images.map((img) => (
              <ListItem
                button
                onClick={() => setSelected(images.indexOf(img))}
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
                  src={img}
                  style={{ width: "50%", height: "100%" }}
                  alt=""
                />
                <ListItemText sx={{ ml: "20px" }}>Game Title</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default CarouselContainer;
