import React from "react";
import { CONTACTS } from "../../constants/contacts";
import { LinkWithIcon } from "../linkWithIcon/linkWithIcon";
import { StyledPopUpStack } from "../styled";

interface ContactsProps {
  isShow: boolean;
}

export const Contacts = ({ isShow }: ContactsProps) => {
  return (
    <StyledPopUpStack
      sx={{
        transform: {
          xs: `translateY(${isShow ? 0 : "-100%"})`,
          md: `translateY(0)`,
        },
        opacity: {
          xs: `${isShow ? 1 : 0}`,
          md: `1`,
        },
        pointerEvents: {
          xs: `${isShow ? "all" : "none"}`,
          md: `all`,
        },
        zIndex: {
          xs: `${isShow ? "100" : "1"}`,
          md: "1",
        },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {CONTACTS.map((contact) => (
        <LinkWithIcon
          title={contact.text}
          icon={contact.icon}
          hrefText={contact.hrefText}
          href={contact.href}
          key={contact.href}
        />
      ))}
    </StyledPopUpStack>
  );
};
