import { Box, Stack, styled } from "@mui/material";

export const MainBlock = styled("div")({
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

export const InfoContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

export const InfoWrapper1 = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: "100%",
  padding: "200px 5% 5%",
  background: "rgba(191, 191, 191, 0.1)",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
    padding: "10% 4% 4%",
  },
}));

export const InfoWrapper2 = styled(Box)(({ theme }) => ({
  zIndex: 10,
  backgroundColor: "transparent",
  minHeight: "100%",
  flex: 3,
  padding: "200px 5% 5% 3%",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
    padding: "0 4% 4%",
  },
}));
