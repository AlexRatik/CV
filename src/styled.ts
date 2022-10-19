import { Box, Stack, styled } from "@mui/material";

export const MainBlock = styled("div")({
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

export const InfoContainer = styled(Stack)({
  flexDirection: "row",
  height: "100%",
});

export const InfoWrapper1 = styled(Box)({
  flex: 1,
  height: "100%",
  padding: "100px 15% 10% 10%",
  background: "rgba(191, 191, 191, 0.1)",
});

export const InfoWrapper2 = styled(Box)({
  height: "100%",
  flex: 3,
  padding: "200px 10% 10% 2%",
  background: "#fff",
});
