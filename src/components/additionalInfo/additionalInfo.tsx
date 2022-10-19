import React from "react";
import { Avatar, Description } from "./styled";
import AvatarSRC from "../../assets/avatar.jpg";
import { Stack } from "@mui/material";
import { Contacts } from "../contacts/contacts";

export const AdditionalInfo = () => {
  return (
    <Stack gap={"40px"}>
      <Avatar src={AvatarSRC} alt={"avatar"} />
      <Description>
        Result-oriented, promising programmer, self-developing at the speed of
        light. I have no difficulties in establishing contact with the team. I'm
        fluent in Russian and JavaScript. My English is a little worse - B1.
        Nice to meet you here)
      </Description>
      <Contacts />
    </Stack>
  );
};
