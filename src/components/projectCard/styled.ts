import { Link, Stack, styled, Typography } from "@mui/material";

export const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});

export const ProjectCardContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
  borderRadius: "8px",
  boxShadow:
    "-3px 3px 6px rgba(240, 240, 240, 0.2), 3px -3px 6px rgba(240, 240, 240, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(240, 240, 240, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(240, 240, 240, 0.5)",
  transition: "all .35s ease",
  padding: "5px",
  "&:hover": {
    boxShadow: "none",
    transform: "scale(1.1)",
  },
});

export const StyledImg = styled("img")({
  maxWidth: "30%",
  borderRadius: "15px",
});

export const Title = styled(Typography)({
  fontSize: "32px",
  fontWeight: 600,
});

export const Description = styled(Typography)({
  fontSize: "22px",
});

export const WorkStack = styled(Typography)({
  color: "#79819A",
  fontSize: "20px",
});
