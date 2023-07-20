export type WebSamples = {
  name: string;
  description: string;
  links: { title: string; url: string }[];
};

export const webSamplesList: WebSamples[] = [
  {
    name: 'FriskyPixel.net',
    description:
      "Congratulations, you've made it here! I've built this site using the Svelte framework in conjunction with SCSS and TypeScript.",
    links: [
      { title: 'Github', url: 'https://github.com/FriskyPixel/friskypixel' },
    ],
  },
  {
    name: 'Array',
    description:
      "Worked on the front end of Array's embeddable web credit components. I helped to provide both custom themes and custom functionality to clients, using the Svelte framework along with TypeScript.",
    links: [
      { title: 'Examples', url: 'https://array.com/developers/embedded-demos' },
    ],
  },
  {
    name: 'Tweddle',
    description:
      "Tweddle Group's customer facing website. I built the front-end of the site using HTML, CSS, JavaScript and the Bootstrap framework, based on the design given by our Creative Design department.",
    links: [{ title: 'Site', url: 'https://www.tweddle.com' }],
  },
  {
    name: 'Crown Clothing',
    description:
      "A fictional clothing commerce site built using React, based on Udacity's Complete React Developer course by Andrei Neagoie and Yihua Zhang. It ties in with Firebase for authentication, and Firestore as its database.",
    links: [
      { title: 'App', url: 'https://friskypixel-crown-clothing.netlify.app' },
      { title: 'Github', url: 'https://github.com/FriskyPixel/crown-clothing' },
    ],
  },
  {
    name: 'Udacity Travel App',
    description:
      "The capstone project for Udacity's Front End Nanodegree Program. The project utilized Webpack and Express, as well as multiple other node.js modules, in order to get weather and location information from various APIs so that the user could get either current or future weather information for destinations of their choosing.",
    links: [
      { title: 'Github', url: 'https://github.com/FriskyPixel/travel-app' },
    ],
  },
];
