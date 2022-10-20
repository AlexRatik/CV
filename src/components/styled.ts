import { Stack, styled } from "@mui/material";

export const StyledPopUpStack = styled(Stack)(({ theme }) => ({
  transition: "all .35s ease",
  gap: "10px",
  zIndex: 2,
  width: "100%",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow:
      "-3px 3px 6px rgba(240, 240, 240, 0.2), 3px -3px 6px rgba(240, 240, 240, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(240, 240, 240, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(240, 240, 240, 0.5)",
  },
}));
