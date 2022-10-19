import React from "react";
import { Name, Specialization, Title } from "./styled";
import { Stack } from "@mui/material";
import { Experience } from "../experience/experience";
import { Skills } from "../skills/skills";
import { Education } from "../education/education";
import { Projects } from "../projects/projects";

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
          <Title>Education</Title>
          <Education />
          <Title>Projects</Title>
          <Projects />
        </Stack>
      </Stack>
    </div>
  );
};
