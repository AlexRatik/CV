import React from "react";
import { PROJECTS } from "../../constants/projects";
import { ProjectCard } from "../projectCard/projectCard";
import { Stack } from "@mui/material";

export const Projects = () => {
  return (
    <Stack gap={3}>
      {PROJECTS.map((proj) => (
        <ProjectCard {...proj} key={proj.href} />
      ))}
    </Stack>
  );
};
