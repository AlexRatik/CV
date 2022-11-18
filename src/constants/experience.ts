import { IExperience } from "../interfaces/IExperience";
import { ReactComponent as RSS_LOGO } from "../assets/rsLogo.svg";
import { ReactComponent as PAC_LOGO } from "../assets/pac.svg";

export const EXPERIENCE: IExperience[] = [
  {
    companyName: "Parrot Art Club",
    period: "sep. 2022 - nov. 2022",
    specialization: "Frontend developer",
    description:
      "A small startup where our team developed the platform using the following technology stack: React, Redux, Apollo client, Material-UI, formik, yup.",
    logo: PAC_LOGO,
  },  {
    companyName: "RSSchool",
    period: "jul. 2021 - may 2022",
    specialization: "Student",
    description:
        "Many interesting educational projects have been created, tons of materials have been studied and a huge amount of experience has been gained. It was very exciting, but it's time to move on to a new stage... ",
    logo: RSS_LOGO,
  },
];
