import image1 from "../images/chatapp.png";
import image2 from "../images/screenshotTGuide.png";
import image3 from "../images/ptc-binder-pic.jpg";
import image4 from "../images/weatherScreenshot.png";
import rnbpic from "../images/rnb_pic.png";
import comingSoonPic from "../images/coming_soon.png";

export const projects = [
  {
    name: "Room & Bord Architecture",
    description:"A website built with Next.js that showcases the work of an architecture firm. Utilizes a very small CMS that me and my partner built to allow the client to update the site themselves.",
    picture: rnbpic,
    url: "https://roomandbord-arch.com",
    github: "https://github.com/McTastic"
  },
  {
    name: "PTC-Binder",
    description:
      "A full stack web application that utilizes Next.js for page distrobution. This app allows the user to have a digital tracker for their Pokemon Card collection",
    picture: image3,
    url: "https://ptc-binder-v2-team-mc.vercel.app/",
    github: "https://github.com/McTastic/PTC-Binder_V2"
  },
  {
    name: "Super Chill Chat",
    description:
      "Fun little chat app that allows users to communicate with each other via multiple chat rooms. Utilizes web sockets via socket-io. Utilizes a basic express server and Remix.js",
    picture: image1,
    url: "https://chill-chat.onrender.com",
    github: "https://github.com/McTastic/Chat_App"
  },
  {
    name: "Travel Guide",
    description:
      "Front end web application utilizing the open weather and wikipedia APIs to find information on specified country/city",
    picture: image2,
    url: "https://jkohrt7.github.io/Digital_Travel_Guide/",
    github: "https://github.com/jkohrt7/Digital_Travel_Guide"
  },
  {
    name: "Weather Dashboard",
    description:
      "This is a basic front-end application utilizing the OpenWeather API. This allows users to search for a city and displays the current weather",
    picture: image4,
    url: "https://mctastic.github.io/Weather-Dashboard/",
    github: "https://github.com/McTastic/Weather-Dashboard"
  },
  {
    name: "Coming Soon!",
    description: "More projects coming soon!",
    picture: comingSoonPic,
    url: "https://github.com/McTastic",
    github: "https://github.com/McTastic"
  }
];
