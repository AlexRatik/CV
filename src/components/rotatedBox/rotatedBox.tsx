import React from "react";
import { styled } from "@mui/material";

const StyledRotatedRectangle = styled("div")(({ theme }) => ({
  width: "105%",
  minHeight: "20%",
  backgroundColor: "#FFD0C2",
  transform: "rotate(-6deg)",
  position: "absolute",
  left: "-3%",
  top: "-10%",
  zIndex: "2",
  [theme.breakpoints.down("md")]: {
    top: "-5%",
    left: "-25%",
    width: "135%",
    transform: "rotate(-20deg)",
  },
  [theme.breakpoints.down(550)]: {
    top: "-10%",
    left: "-45%",
    width: "165%",
  },
}));

const RotatedBox = () => {
  return <StyledRotatedRectangle />;
};

export { RotatedBox };
