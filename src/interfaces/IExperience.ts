import { FunctionComponent, SVGProps } from "react";

export interface IExperience {
  description: string;
  period: string;
  companyName: string;
  specialization: string;
  logo: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
}
