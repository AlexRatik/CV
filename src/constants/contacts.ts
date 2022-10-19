import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TelegramIcon from "@mui/icons-material/Telegram";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const CONTACTS: {
  href: string;
  hrefText: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}[] = [
  {
    text: "Email",
    href: "alexandr.ratkevich.1337@gmail.com",
    hrefText: "alexandr.ratkevich.1337@gmail.com",
    icon: EmailIcon,
  },
  {
    text: "Phone",
    href: "(+375) 44 592 80 38",
    hrefText: "(+375) 44 592 80 38",
    icon: PhoneIphoneIcon,
  },
  {
    text: "Telegram",
    href: "https://t.me/Alexandr_Ratkevich",
    hrefText: "@Alexandr_Ratkevich",
    icon: TelegramIcon,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandr-ratkevich-57708b231/",
    hrefText: "alexandr-ratkevich-57708b231",
    icon: LinkedInIcon,
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/ra0174/",
    hrefText: "@ra0174",
    icon: InstagramIcon,
  },
  {
    text: "Location",
    href: "",
    hrefText: "Belarus, Minsk",
    icon: MyLocationIcon,
  },
];

export { CONTACTS };
