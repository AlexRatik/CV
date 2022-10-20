import React from "react";
import {
  Company,
  ItemContainer,
  Period,
  Specialization,
  StyledImg,
} from "./styled";
import { Box, Stack } from "@mui/material";
import { EDUCATION } from "../../constants/education";

export const Education = () => {
  return (
    <>
      {EDUCATION.map((educ) => (
        <ItemContainer key={educ.company + educ.specialization + educ.period}>
          <Box textAlign={"center"}>
            <StyledImg src={educ.logo} alt={educ.company} />
          </Box>
          <Stack width={"100%"} gap={0.75}>
            <Company>{educ.company}</Company>
            <Specialization>{educ.specialization}</Specialization>
            <Period>{educ.period}</Period>
          </Stack>
        </ItemContainer>
      ))}
    </>
  );
};
