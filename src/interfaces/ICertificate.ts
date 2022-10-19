import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface ICertificate {
  href: string;
  company: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  hrefText: string;
  title: string;
}
