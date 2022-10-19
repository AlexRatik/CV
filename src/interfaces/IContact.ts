import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface IContact {
  href: string;
  hrefText: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}
