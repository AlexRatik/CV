import { IProject } from "../interfaces/IProject";
import PM from "../assets/projects/project_managment.png";
import ArtQuiz from "../assets/projects/artQuiz.png";
import Louvre from "../assets/projects/louvre.png";
import Momentum from "../assets/projects/momentum.png";
import Calculator from "../assets/projects/calculator.png";

export const PROJECTS: IProject[] = [
  {
    name: "Project Management",
    description:
      "A convenient tool for work planning and task separation. A team project.",
    href: "https://team-18-react-project-management.netlify.app/",
    imgSRC: PM,
    stack: "React + Redux + Typescript + Material-UI + modular SCSS + JWT",
  },
  {
    name: "Calculator",
    href: "https://alexratik.github.io/calculator",
    description:
      "React calculator written on both functional and class components with a history of calculations.",
    stack: "React + Redux + Typescript + Styled-Components + Cypress",
    imgSRC: Calculator,
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
