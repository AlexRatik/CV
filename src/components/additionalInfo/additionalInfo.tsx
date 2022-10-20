import React from "react";
import {
  Avatar,
  Description,
  SubTitle,
  StyledStack,
  Name,
  Specialization,
} from "./styled";
import AvatarSRC from "../../assets/avatar.png";
import { Box, Stack } from "@mui/material";
import { Contacts } from "../contacts/contacts";
import { Certificates } from "../certificates/certificates";
import { BurgerButton } from "../burgerButton/burgerButton";

interface AdditionalInfoProps {
  showContacts: boolean;
  showCertificates: boolean;
  toggleShowContacts: () => void;
  toggleShowCertificates: () => void;
}

export const AdditionalInfo = ({
  toggleShowCertificates,
  showCertificates,
  toggleShowContacts,
  showContacts,
}: AdditionalInfoProps) => {
  return (
    <Stack gap={"40px"}>
      <Stack
        display={{ xs: "block", md: "none" }}
        zIndex={100}
        textAlign={"center"}
      >
        <Name>Alexandr Ratkevich</Name>
        <Specialization>Frontend developer</Specialization>
      </Stack>
      <Avatar src={AvatarSRC} alt={"avatar"} />
      <Description>
        Result-oriented, promising programmer, self-developing at the speed of
        light. I have no difficulties in establishing contact with the team. I'm
        fluent in Russian and JavaScript. My English is a little worse - B1.
        Nice to meet you here)
      </Description>
      <Box position={"relative"}>
        <StyledStack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SubTitle>Contacts</SubTitle>
          <BurgerButton
            sx={{ display: { md: "none" } }}
            onClick={(e) => {
              e.stopPropagation();
              toggleShowContacts();
            }}
          />
        </StyledStack>
        <Contacts isShow={showContacts} />
      </Box>
      <Box position={"relative"}>
        <StyledStack>
          <SubTitle>Certificates</SubTitle>
          <BurgerButton
            sx={{ display: { md: "none" } }}
            onClick={(e) => {
              e.stopPropagation();
              toggleShowCertificates();
            }}
          />
        </StyledStack>
        <Certificates isShow={showCertificates} />
      </Box>
    </Stack>
  );
};
