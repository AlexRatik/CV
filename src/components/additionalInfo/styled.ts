import { Stack, styled, Typography } from "@mui/material";

export const Avatar = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  margin: "0 auto",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    maxWidth: "55%",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  lineHeight: "34px",
  letterSpacing: "0.01em",
  color: "#2E2E48",
  opacity: 0.8,
  [theme.breakpoints.down("xl")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const SubTitle = styled(Typography)({
  marginBottom: "10px",
  color: "#79819A",
  fontSize: "18px",
});

export const StyledStack = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});
export const Name = styled("h1")(({ theme }) => ({
  color: "#2E2E48",
  fontSize: "72px",
  fontWeight: 600,
  marginBottom: "6px",
  [theme.breakpoints.down(550)]: {
    fontSize: "52px",
  },
  // [theme.breakpoints.down("md")]: {
  //   fontSize: "44px",
  // },
}));

export const Specialization = styled("h2")(({ theme }) => ({
  color: "#2E2E48",
  fontSize: "48px",
  fontWeight: 400,
  [theme.breakpoints.down(550)]: {
    fontSize: "34px",
  },
  // [theme.breakpoints.down("md")]: {
  //   fontSize: "30px",
  // },
}));
