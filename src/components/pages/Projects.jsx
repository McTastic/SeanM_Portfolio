import "../../css/projects.css"
import ProjectCard from "../ProjectCard";
import { Grid } from "@mui/material";

const Projects = () =>{
    return (
        <>
        <div class="stars2"></div>
        <div class="twinkling2"></div>
        <Grid container >
        <ProjectCard/>
        </Grid>
        </>
    ) 
}

export default Projects;