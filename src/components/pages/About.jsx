import Picture from "../../images/self_pic.jpg"
import "../../css/about.css"
import { Box, Typography } from "@mui/material";

const About = () =>{
    return (
        <Box className="about">
            <Typography className="aboutText"
            sx={{
                width: "65%",
                fontSize:"4em",
                fontFamily:"Inter",
            }}
            >Hi there! My name is <span className="aboutName">Sean</span> and I'm a web developer! I have spent most of my life working in various tech fields, but gained a passion for web developement and programming over the years so here we are! I am very interested in website design and crafting functional yet beautiful user experiences. </Typography>
            <Box className="picContainer">
            <img className="aboutPic" src={Picture} alt="Self portrait of me"/>
            </Box>
            <div className="aboutIcons"></div>
        </Box>
    )
}

export default About;