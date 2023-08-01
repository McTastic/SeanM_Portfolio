import Picture from "../../images/self_pic.jpg";
import "../../css/about.css";
import { Box, Typography } from "@mui/material";

const About = ({ isDarkTheme }) => {
const darkTheme1 = {
  color: "text.primary",
  display: { xs: "inline", md: "inline-flex" },
  background: "linear-gradient(#20bf55 0%, #01baef 74%)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}
const lightTheme1 = {
  color: "text.primary",
  display: { xs: "inline", md: "inline-flex" },
  background: "linear-gradient(red 0%, purple 74%)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

  return (
      <Box className="about">
        <Typography
          component="h2"
          className="aboutText"
          sx={{
            marginLeft: ".5em",
            fontSize: { xs: "1.5rem", md: "4rem" },
            fontFamily: "Inter",
            lineHeight: "1.2",
            maxWidth: "70%",
            textAlign: "left",
          }}
        >
          Hi there! My name is{" "}
          <Box
            className="aboutName"
            sx={isDarkTheme ? darkTheme1 : lightTheme1}
          >
            Sean
          </Box>{" "}
          and I'm a web developer! I have spent most of my life working in
          various tech fields, but gained a passion for{" "}
          <Box
            sx={{
              color: "text.primary",
              display: "inline",
              background:
                "-webkit-linear-gradient(315deg, #fc5296 0%, #f67062 74%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            web developement
          </Box>{" "}
          and programming over the years so here we are! I am very interested in
          website design and crafting{" "}
          <Box
            sx={{
              color: "text.primary",
              display: "inline",
              background:
                "-webkit-linear-gradient(315deg, #ebf928 0%, #d425b5 74%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            functional yet beautiful
          </Box>{" "}
          user experiences.{" "}
        </Typography>
        <Box className="picContainer">
          <img className="aboutPic" src={Picture} alt="Self portrait of me" />
        </Box>
      </Box>
  );
};

export default About;
