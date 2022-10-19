import { Stack, styled, Typography } from "@mui/material";

export const StyledSkillCard = styled(Stack)({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100px",
  height: "108px",
  borderRadius: "8px",
  boxShadow:
    "-3px 3px 6px rgba(240, 240, 240, 0.2), 3px -3px 6px rgba(240, 240, 240, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(240, 240, 240, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(240, 240, 240, 0.5)",
  background: "#fff",
  textAlign: "center",
  svg: {
    width: "80%",
    height: "auto",
    alignSelf: "center",
  },
});

export const StyledTypography = styled(Typography)({
  color: "#2E2E48",
  fontWeight: 500,
  marginTop: "5px",
});
