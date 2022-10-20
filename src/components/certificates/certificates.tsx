import React from "react";
import { CERTIFICATES } from "../../constants/certificates";
import { LinkWithIcon } from "../linkWithIcon/linkWithIcon";
import { StyledPopUpStack } from "../styled";

interface CertificatesProps {
  isShow: boolean;
}

export const Certificates = ({ isShow }: CertificatesProps) => {
  return (
    <StyledPopUpStack
      sx={{
        transform: {
          xs: `translateY(${isShow ? 0 : "-100%"})`,
          md: `translateY(0)`,
        },
        opacity: {
          xs: `${isShow ? 1 : 0}`,
          md: `1`,
        },
        pointerEvents: {
          xs: `${isShow ? "all" : "none"}`,
          md: `all`,
        },
        zIndex: {
          xs: `${isShow ? "50" : "1"}`,
          md: "1",
        },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {CERTIFICATES.map((cert) => (
        <LinkWithIcon
          key={cert.href}
          title={cert.company}
          icon={cert.icon}
          hrefText={cert.hrefText}
          href={cert.href}
        />
      ))}
    </StyledPopUpStack>
  );
};
