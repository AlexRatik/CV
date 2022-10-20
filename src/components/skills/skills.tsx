import React from "react";
import { SKILLS } from "../../constants/skills";
import SkillCard from "../skillCard/skillCard";
import { Stack } from "@mui/material";

export const Skills = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      gap={"30px"}
    >
      {SKILLS.map((skill) => (
        <SkillCard icon={skill.icon} text={skill.text} key={skill.text} />
      ))}
    </Stack>
  );
};
