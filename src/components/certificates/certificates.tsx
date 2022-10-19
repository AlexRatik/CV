import React from "react";
import { Stack } from "@mui/material";
import { CERTIFICATES } from "../../constants/certificates";
import { LinkWithIcon } from "../linkWithIcon/linkWithIcon";

export const Certificates = () => {
  return (
    <Stack gap={2}>
      {CERTIFICATES.map((cert) => (
        <LinkWithIcon
          key={cert.href}
          title={cert.company}
          icon={cert.icon}
          hrefText={cert.hrefText}
          href={cert.href}
        />
      ))}
    </Stack>
  );
};
