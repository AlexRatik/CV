import { styled, Typography } from "@mui/material";

export const Name = styled("h1")(({ theme }) => ({
  color: "#2E2E48",
  fontSize: "72px",
  fontWeight: 600,
  marginBottom: "6px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "52px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "44px",
  },
}));

export const Specialization = styled("h2")(({ theme }) => ({
  color: "#2E2E48",
  fontSize: "48px",
  fontWeight: 400,
  [theme.breakpoints.down("xl")]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: 500,
  position: "relative",
  "&:after": {
    content: `""`,
    position: "absolute",
    left: 0,
    bottom: "-10px",
    height: "15px",
    width: "30%",
    backgroundColor: "pink",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));
