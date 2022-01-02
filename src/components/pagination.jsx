import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function Pagination(props) {
  let pageNums = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.pageSize); i++) {
    pageNums.push(i);
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {props.currentPage === 1 ? (
        <Button disabled>
          <NavigateBeforeIcon />
        </Button>
      ) : (
        <Button onClick={() => props.onPageChangeBackward()}>
          <NavigateBeforeIcon />
        </Button>
      )}

      {props.currentPage === pageNums.length ? (
        <Button disabled>
          <NavigateNextIcon />
        </Button>
      ) : (
        <Button onClick={() => props.onPageChangeForward()}>
          <NavigateNextIcon />
        </Button>
      )}
    </ButtonGroup>
  );
}

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const pageContent = [];

  for (let i = startIndex; i < endIndex; i++) {
    items[i] && pageContent.push(items[i]);
  }
  return pageContent;
}
