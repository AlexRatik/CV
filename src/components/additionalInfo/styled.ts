import { styled, Typography } from "@mui/material";

export const Avatar = styled("img")({
  borderRadius: "33%",
  zIndex: 10,
});

export const Description = styled(Typography)({
  fontSize: "28px",
  lineHeight: "34px",
  letterSpacing: "0.01em",
  color: "#2E2E48",
  opacity: 0.8,
});
