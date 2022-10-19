import { Box, Stack, styled, Typography } from "@mui/material";

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
  marginTop: "15px",
});
export const Specialization = styled(Typography)({
  color: "#79819A",
  fontSize: "24px",
});
export const Description = styled(Typography)({
  fontSize: "22px",
  lineHeight: "34px",
  letterSpacing: "0.01em",
});

export const LogoBox = styled(Box)({
  svg: {
    width: "75%",
    height: "auto",
  },
});
