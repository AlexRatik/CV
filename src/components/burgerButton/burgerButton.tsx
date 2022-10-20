import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

interface BurgerButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sx: { [key: string]: unknown };
}

export const BurgerButton = ({ onClick, sx }: BurgerButtonProps) => {
  return (
    <IconButton sx={sx} onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
};
