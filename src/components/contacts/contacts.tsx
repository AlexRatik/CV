import React from "react";
import { IconButton, Link, Stack } from "@mui/material";
import { CONTACTS } from "../../constants/contacts";
import { ContactItem, HrefText, StyledLink, Text } from "./styled";

export const Contacts = () => {
  return (
    <Stack gap={"10px"}>
      {CONTACTS.map((contact) => (
        <ContactItem key={contact.href}>
          {contact.href ? (
            <Link
              sx={{ textDecoration: "none", color: "#47516B" }}
              href={`${
                contact.text === "Email"
                  ? "mailto:"
                  : contact.text === "Phone"
                  ? "tel:"
                  : ""
              }${contact.href}`}
            >
              <IconButton
                sx={{
                  background: "#E2E6EE",
                }}
              >
                {React.createElement(contact.icon)}
              </IconButton>
            </Link>
          ) : (
            <IconButton
              disabled
              sx={{
                background: "#E2E6EE",
              }}
            >
              {React.createElement(contact.icon)}
            </IconButton>
          )}
          <Stack>
            <Text>{contact.text}</Text>
            {contact.href ? (
              <StyledLink
                href={`${
                  contact.text === "Email"
                    ? "mailto:"
                    : contact.text === "Phone"
                    ? "tel:"
                    : ""
                }${contact.href}`}
              >
                <HrefText>{contact.hrefText}</HrefText>
              </StyledLink>
            ) : (
              <HrefText>{contact.hrefText}</HrefText>
            )}
          </Stack>
        </ContactItem>
      ))}
    </Stack>
  );
};
