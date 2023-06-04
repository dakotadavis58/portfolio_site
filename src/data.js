export const data = [
  {
    lightBg: false,
    primary: true,
    tech: [
      "Node.js",
      "MongoDB",
      "React",
      "Javascript",
      "HTML",
      "CSS",
      "Firebase",
    ],
    imgStart: "",
    lightTopLine: true,
    lightTextDesc: true,
    lightText: true,
    topLine: "Project #1",
    headline: "E-Commerce Platform",
    description:
      "An ecommerce platform designed with styled components using React for the front end. The backend consists of a Node.js server that also uses firebase as the database and authentication method",
    liveDemoBtn: "Demo",
    demoLink:
      "https://styledcomponentecommerce-78qmga2ax-dakotadavis58.vercel.app/",
    sourceCodeLink:
      "https://github.com/dakotadavis58/styled_component_ecommerce",
    sourceCodeBtn: "Code",
    start: "",
    img: require("./assets/ecommerce_site_img.png"),
    alt: "image",
    id: "first_project",
  },
  {
    lightBg: true,
    primary: false,
    tech: [
      "Node.js",
      "React",
      "Javascript",
      "HTML",
      "CSS",
      "Next.js",
      "Tailwind CSS",
    ],
    imgStart: "true",
    lightTopLine: false,
    lightTextDesc: false,
    lightText: false,
    topLine: "Project #2",
    headline: "Dice Roller App",
    description:
      "A dice roller app that allows the user to roll a single die or multiple dice at once. The app also allows the user to save their rolls and view them in a history section.",
    liveDemoBtn: "Demo",
    demoLink: "https://dice-app2.vercel.app/",
    sourceCodeLink: "https://github.com/dakotadavis58/dice_app2",
    sourceCodeBtn: "Code",
    start: "",
    img: require("./assets/dice_lg.png"),
    imgsm: require("./assets/dice_sm.png"),
    alt: "image",
    id: "second_project",
  },
];

export const links = [
  {
    label: "Home",
    to: "#",
  },
  {
    label: "About",
    to: "#aboutme",
  },
  {
    label: "Projects",
    to: "#first_project",
  },
  {
    label: "Contact",
    to: "#contact",
  },
];
