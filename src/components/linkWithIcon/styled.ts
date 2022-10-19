import { Link, Stack, styled, Typography } from "@mui/material";

export const Text = styled(Typography)({
  color: "#79819A",
  fontSize: "18px",
});

export const HrefText = styled(Typography)({
  color: "#47516B",
  fontSize: "20px",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  transition: "all .35s ease",
  "&:hover": {
    opacity: "0.7",
  },
});

export const StyledItem = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
});
