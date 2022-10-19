import React, { FunctionComponent, SVGProps } from "react";
import { StyledSkillCard, StyledTypography } from "./styled";

interface SkillCardProps {
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  text: string;
}

const SkillCard = ({ text, icon }: SkillCardProps) => {
  return (
    <StyledSkillCard>
      {React.createElement(icon)}
      <StyledTypography>{text}</StyledTypography>
    </StyledSkillCard>
  );
};

export default SkillCard;
