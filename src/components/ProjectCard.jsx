import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { projects } from "../utils/projectData";

export default function ActionAreaCard() {
  return (
    <>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} lg={6} xl={6} key={project.name} display="flex" justifyContent={"center"}>
          <Card sx={{ maxWidth: 800, marginTop: 15, boxShadow: 10 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image= {project.picture}
                alt="project picture"
                onClick={(e)=> window.open(project.url)}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize="1.5em">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
}
