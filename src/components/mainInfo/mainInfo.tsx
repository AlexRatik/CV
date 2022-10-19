import React from "react";
import { Name, Specialization, Title } from "./styled";
import { Stack } from "@mui/material";
import { Experience } from "../experience/experience";
import { Skills } from "../skills/skills";

export const MainInfo = () => {
  return (
    <div>
      <Name>Alexandr Ratkevich</Name>
      <Specialization>Frontend developer</Specialization>
      <Stack mt={6}>
        <Stack gap={5}>
          <Title>Experience</Title>
          <Experience />
          <Title>Skills</Title>
          <Skills />
        </Stack>
      </Stack>
    </div>
  );
};
