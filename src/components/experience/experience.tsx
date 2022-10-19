import React from "react";
import { EXPERIENCE } from "../../constants/experience";
import { Box, Stack } from "@mui/material";
import {
  Company,
  Specialization,
  Period,
  Description,
  LogoBox,
} from "./styled";

export const Experience = () => {
  return (
    <div>
      {EXPERIENCE.map((exp) => (
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <LogoBox>
            {React.createElement(exp.logo)}
            <Period mt={2}>{exp.period}</Period>
          </LogoBox>
          <Box>
            <Company>{exp.companyName}</Company>
            <Specialization>{exp.specialization}</Specialization>
            <Description>{exp.description}</Description>
          </Box>
        </Stack>
      ))}
    </div>
  );
};
