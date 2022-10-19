import React from "react";
import { Name, Specialization, Title } from "./styled";
import { Stack } from "@mui/material";
import { Experience } from "../experience/experience";

export const MainInfo = () => {
  return (
    <div>
      <Name>Alexandr Ratkevich</Name>
      <Specialization>Frontend developer</Specialization>
      <Stack mt={6}>
        <Stack gap={2.5}>
          <Title>Experience: </Title>
          <Experience />
        </Stack>
      </Stack>
    </div>
  );
};
