import { Box, Stack, styled, Typography } from "@mui/material";

export const ItemContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
});

export const Company = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const Period = styled(Typography)(({ theme }) => ({
  color: "#79819A",
  marginTop: "15px",

  fontSize: "18px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const Specialization = styled(Typography)(({ theme }) => ({
  color: "#79819A",
  fontSize: "24px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  lineHeight: "34px",
  letterSpacing: "0.01em",
  [theme.breakpoints.down("xl")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const LogoBox = styled(Box)({
  textAlign: "center",
  svg: {
    width: "75%",
    height: "auto",
  },
});
