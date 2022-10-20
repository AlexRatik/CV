import React from "react";
import { Title, Name, Specialization } from "./styled";
import { Stack } from "@mui/material";
import { Experience } from "../experience/experience";
import { Skills } from "../skills/skills";
import { Education } from "../education/education";
import { Projects } from "../projects/projects";

export const MainInfo = () => {
  return (
    <Stack>
      <Stack display={{ xs: "none", md: "block" }}>
        <Name>Alexandr Ratkevich</Name>
        <Specialization>Frontend developer</Specialization>
      </Stack>
      <Stack mt={6}>
        <Stack gap={5}>
          <Title>Experience</Title>
          <Experience />
          <Title>Skills</Title>
          <Skills />
          <Title>Education</Title>
          <Education />
          <Title>Projects</Title>
          <Projects />
        </Stack>
      </Stack>
    </Stack>
  );
};
