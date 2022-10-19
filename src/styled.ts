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

export const InfoWrapper = styled(Box)({
  flex: 1,
  height: "100%",
  padding: "100px 15% 10% 10%",
  background: "rgba(191, 191, 191, 0.1)",
});
