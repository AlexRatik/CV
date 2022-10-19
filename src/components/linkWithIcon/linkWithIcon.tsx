import React from "react";
import { IconButton, Link, Stack, SvgIconTypeMap } from "@mui/material";
import { HrefText, StyledItem, StyledLink, Text } from "./styled";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface LinkWithIconProps {
  href?: string;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  hrefText: string;
}

export const LinkWithIcon = ({
  icon,
  title,
  hrefText,
  href,
}: LinkWithIconProps) => {
  return (
    <StyledItem>
      {href ? (
        <Link
          sx={{ titleDecoration: "none", color: "#47516B" }}
          href={`${
            title === "Email" ? "mailto:" : title === "Phone" ? "tel:" : ""
          }${href}`}
        >
          <IconButton
            sx={{
              background: "#E2E6EE",
            }}
          >
            {React.createElement(icon)}
          </IconButton>
        </Link>
      ) : (
        <IconButton
          disabled
          sx={{
            background: "#E2E6EE",
          }}
        >
          {React.createElement(icon)}
        </IconButton>
      )}
      <Stack>
        <Text>{title}</Text>
        {href ? (
          <StyledLink
            href={`${
              title === "Email" ? "mailto:" : title === "Phone" ? "tel:" : ""
            }${href}`}
          >
            <HrefText>{hrefText}</HrefText>
          </StyledLink>
        ) : (
          <HrefText>{hrefText}</HrefText>
        )}
      </Stack>
    </StyledItem>
  );
};
