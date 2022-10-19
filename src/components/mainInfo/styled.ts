import { styled, Typography } from "@mui/material";

export const Name = styled("h1")({
  color: "#2E2E48",
  fontSize: "72px",
  fontWeight: 600,
  marginBottom: "6px",
});

export const Specialization = styled("h2")({
  color: "#2E2E48",
  fontSize: "48px",
  fontWeight: 400,
});

export const Title = styled(Typography)({
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
});
