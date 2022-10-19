import React from "react";
import { Box } from "@mui/material";
import { IProject } from "../../interfaces/IProject";
import {
  Description,
  ProjectCardContainer,
  StyledImg,
  StyledLink,
  Title,
  WorkStack,
} from "./styled";

export const ProjectCard = ({
  description,
  imgSRC,
  href,
  stack,
  name,
}: IProject) => {
  return (
    <StyledLink href={href}>
      <ProjectCardContainer>
        <StyledImg src={imgSRC} alt={href} />
        <Box>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <WorkStack>Stack: {stack}</WorkStack>
        </Box>
      </ProjectCardContainer>
    </StyledLink>
  );
};
