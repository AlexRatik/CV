import React from "react";
import { EXPERIENCE } from "../../constants/experience";
import { Grid, Stack} from "@mui/material";
import {
  Company,
  Specialization,
  Period,
  Description,
  LogoBox,
} from "./styled";

export const Experience = () => {
  return (
    <Stack gap={1}>
      {EXPERIENCE.map((exp) => (
        <Grid container key={exp.description}>
          <Grid item xs={4}>
          <LogoBox>
            {React.createElement(exp.logo)}
            <Period>{exp.period}</Period>
          </LogoBox>
          </Grid>
          <Grid item xs={8}>
            <Company>{exp.companyName}</Company>
            <Specialization>{exp.specialization}</Specialization>
            <Description>{exp.description}</Description>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};
