import React from "react";
import { styled } from "@mui/material";

const StyledRotatedRectangle = styled("div")({
  width: "105%",
  minHeight: "20%",
  backgroundColor: "#FFD0C2",
  transform: "rotate(-6deg)",
  position: "absolute",
  left: "-3%",
  top: "-10%",
  zIndex: "2",
});

const RotatedBox = () => {
  return <StyledRotatedRectangle />;
};

export { RotatedBox };
