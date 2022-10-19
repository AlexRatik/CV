import React from "react";
import { Stack } from "@mui/material";
import { CONTACTS } from "../../constants/contacts";
import { LinkWithIcon } from "../linkWithIcon/linkWithIcon";

export const Contacts = () => {
  return (
    <Stack gap={"10px"}>
      {CONTACTS.map((contact) => (
        <LinkWithIcon
          title={contact.text}
          icon={contact.icon}
          hrefText={contact.hrefText}
          href={contact.href}
          key={contact.href}
        />
      ))}
    </Stack>
  );
};
