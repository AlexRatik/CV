import { Stack, styled, Typography } from "@mui/material";

export const ItemContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
});

export const Company = styled(Typography)({
  fontSize: "30px",
});
export const Period = styled(Typography)({
  color: "#79819A",
  fontSize: "18px",
});
export const Specialization = styled(Typography)({
  color: "#79819A",
  fontSize: "24px",
});

export const StyledImg = styled("img")({
  maxWidth: "40%",
  margin: "0 auto",
});
