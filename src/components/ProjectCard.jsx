import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { projects } from "../utils/projectData";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ActionAreaCard() {
  return (
    <>
      {projects.map((project) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={6}
          xl={6}
          key={project.name}
          display="flex"
          justifyContent={"center"}
        >
          <Card
            sx={{
              maxWidth: { xs: 300, sm: 500, xl: 745},
              margin: "15px 30px 45px 20px",
              boxShadow: "15px 15px  rgb(33,150,115) , -15px -15px rgb(33,150,55)",
              borderRadius:"10px"
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{height: { xs: 200, sm: 300, xl: 400}}}
                image={project.picture}
                alt="project picture"
                onClick={(e) => window.open(project.url)}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize="1.5em"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <GitHubIcon
                fontSize="large"
                onClick={(e) => window.open(project.github)}
                sx={{
                  transition: "all .5s",
                  "&:hover":{
                    transform: "scale(1.45)",
                    color: "rgb(1,99,155)"
                  }
                }}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
}
