import image1 from "../images/xmasScreenshot.png";
import image2 from "../images/screenshotTGuide.png";
import image3 from "../images/ptc-binder-pic.jpg";
import image4 from "../images/weatherScreenshot.png";
import image5 from "../images/budgetScreenshot.png";
import image6 from "../images/workoutScreenshot.png";

export const projects = [
  {
    name: "PTC-Binder",
    description:
      "A full stack web application that utilizes Next.js for page distrobution. This app allows the user to have a digital tracker for their Pokemon Card collection",
    picture: image3,
    url: "https://ptc-binder-v2-team-mc.vercel.app/",
  },
  {
    name: "Christmas Movie Workshop",
    description:
      "Full-Stack website utilizing the MERN stack. Allows the user to rate movies on a 1 to 5 scale utilizing the imDB API",
    picture: image1,
    url: "https://kmwine02-project03.herokuapp.com/",
  },
  {
    name: "Travel Guide",
    description:
      "Front end web application utilizing the open weather and wikipedia APIs to find information on specified country/city",
    picture: image2,
    url: "https://jkohrt7.github.io/Digital_Travel_Guide/",
  },
  {
    name: "Weather Dashboard",
    description:
      "This is a basic front-end application utilizing the OpenWeather API. This allows users to search for a city and displays the current weather",
    picture: image4,
    url: "https://mctastic.github.io/Weather-Dashboard/",
  },
  {
    name: "Budget Tracker",
    description:
      "Full Stack web app that utilizes MongoDB for it's back-end data. Allows the user to submit amounts (in dollars) to track their budget and total balance",
    picture: image5,
    url: "https://budget-tracker3232.herokuapp.com/",
  },
  {
    name: "Workout Tracker",
    description:
      "Full Stack web app that utlizes MongoDB for it's back-end data. Allows the user to track workouts that they have completed or are in the process of completing. ",
    picture: image6,
    url: "https://damp-oasis-83805.herokuapp.com/?id=61bf7ff6c7cf390016af8fde",
  },
];
