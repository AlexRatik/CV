import { Stack, styled, Typography } from "@mui/material";

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

export const StyledImg = styled("img")({
  maxWidth: "40%",
  margin: "0 auto",
});
