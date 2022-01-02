import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Chip, Grid, List, ListItemText, Typography } from "@mui/material";
import fm from "../assets/footballmanager.jpg";
import bf4 from "../assets/bf4.jpg";
import Pagination, { paginate } from "./pagination";

function CarouselSmall() {
  const images = [fm, bf4];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;
  const [selected, setSelected] = useState();
  const handleSelect = (item) => {
    setSelected(item);
  };
  console.log(selected);

  const handlePageChangeForward = (page) => {
    setCurrentPage(currentPage + 1);
  };
  const handlePageChangeBackward = (page) => {
    setCurrentPage(currentPage - 1);
  };

  let paginated = paginate(images, currentPage, pageSize);

  return (
    <div>
      <Grid container mt={10}>
        <Grid item xs={12}>
          <Pagination
            totalItems={images.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChangeForward={handlePageChangeForward}
            onPageChangeBackward={handlePageChangeBackward}
          ></Pagination>
        </Grid>

        {paginated.map((img) => (
          <Grid item xs={5} lg={2} mr={2}>
            <div>
              <div>
                <img
                  src={img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    marginRight: "20px",
                  }}
                  alt=""
                />
                <Typography sx={{ color: "white" }}>Name</Typography>
                <Typography sx={{ color: "white" }}>
                  <Chip
                    sx={{ bgcolor: "#0074E4", color: "white" }}
                    label="-50%"
                  ></Chip>
                  $Price
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CarouselSmall;
