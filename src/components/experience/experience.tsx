import React from "react";
import { EXPERIENCE } from "../../constants/experience";
import { Box } from "@mui/material";
import {
  Company,
  Specialization,
  Period,
  Description,
  LogoBox,
  ItemContainer,
} from "./styled";

export const Experience = () => {
  return (
    <div>
      {EXPERIENCE.map((exp) => (
        <ItemContainer key={exp.description}>
          <LogoBox>
            {React.createElement(exp.logo)}
            <Period>{exp.period}</Period>
          </LogoBox>
          <Box>
            <Company>{exp.companyName}</Company>
            <Specialization>{exp.specialization}</Specialization>
            <Description>{exp.description}</Description>
          </Box>
        </ItemContainer>
      ))}
    </div>
  );
};
