import "../../css/home.css";
import { Grid, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box textAlign="left" position="relative" top="10em" mt="10em">
        {/* <Typography sx={{fontSize:"150px"}}>Hi, I'm </Typography> */}
        <Typography
          sx={{
            fontSize: "130px",
            position: "relative",
            top: ".5em",
            lineHeight: ".75",
            mb: ".2em",
            // WebkitBoxReflect:"below 155px linear-gradient(to bottom , rgba(0,0,0,0.1)55%, rgba(0,0,0,0.3));"
          }}
        >
          SEAN <br />
          McCARTHY
        </Typography>
        <Typography className="waviy">
          <span className="one">W</span>
          <span className="two">E</span>
          <span className="three">B</span>
          <span style={{ width: ".5em" }}></span>
          <span className="four">D</span>
          <span className="five">E</span>
          <span className="six">V</span>
          <span className="seven">E</span>
          <span className="eight">L</span>
          <span className="nine">O</span>
          <span className="ten">P</span>
          <span className="eleven">E</span>
          <span className="twelve">R</span>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
