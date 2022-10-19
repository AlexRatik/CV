import { IProject } from "../interfaces/IProject";
import PM from "../assets/projects/project_managment.png";
import ArtQuiz from "../assets/projects/artQuiz.png";
import Louvre from "../assets/projects/louvre.png";
import Momentum from "../assets/projects/momentum.png";

export const PROJECTS: IProject[] = [
  {
    name: "Project Management",
    description:
      "A convenient tool for work planning and task separation. A team project.",
    href: "https://team-18-react-project-management.netlify.app/",
    imgSRC: PM,
    stack: "React + Typescript + Material-UI + modular SCSS + JWT",
  },
  {
    name: "Momentum",
    description: "Little extension for Google Chrome.",
    href: "https://rolling-scopes-school.github.io/alexratik-JSFE2021Q3/momentum/",
    imgSRC: Momentum,
    stack: "Typescript + Webpack + SCSS + API",
  },
  {
    name: "Art Quiz",
    description: "A web app for playing an art quiz.",
    href: "https://rolling-scopes-school.github.io/alexratik-JSFE2021Q3/art-quiz/",
    imgSRC: ArtQuiz,
    stack: "Typescript + Webpack +SCSS",
  },
  {
    name: "Louvre Museum",
    description: "Website of the Louvre Museum",
    href: "https://rolling-scopes-school.github.io/alexratik-JSFE2021Q3/museum-dom/",
    imgSRC: Louvre,
    stack: "Javascript + Webpack + SCSS",
  },
];
