import {
  List,
  ListItem,
  Button,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Typography
} from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { fontSize } from "@mui/system";

export default function Widgets({ themeToggle, isDarkTheme }) {
  return (
    <List
      sx={{
        position: "fixed",
        bottom: "10em",
      }}
    >
      <ListItem>
        <ListItemButton
          disableRipple
          href="https://github.com/mctastic"
          sx={{
            fontSize: "30px",
            background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
            borderRadius:"0 30px 30px 0",
            transform: "translate(-180px, 0)",
            transition:"all 1s",
            "&:hover": {
              background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
              transform:"translate(-20px, 0)",
            },
          }}
        >
          <Typography
          align="right"
            sx={{
              fontSize: "30px",
            }}
          >
            Github
          </Typography>
          <GitHubIcon
            style={{
              marginLeft: "50px",
              fontSize: "45px",
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          href="https://www.linkedin.com/in/smccarthydev/"
          sx={{
            fontSize: "30px",
            background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
            borderRadius:"0 30px 30px 0",
            transform: "translate(-180px, 0)",
            transition:"all 1s",
            "&:hover": {
              background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
              transform:"translate(-20px, 0)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              marginRight:"20px",
              position:"relative",
              left:"-15px"
            }}
          >
            Linkedin
          </Typography>
          <LinkedInIcon
            style={{
              marginLeft: "10px",
              fontSize: "45px",
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          disableRipple
          onClick={themeToggle}
          sx={{
            backgroundImage: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
            borderRadius:"0 30px 30px 0",
            transform: "translate(-180px, 0)",
            transition:"all 1s",
            "&:hover": {
              background: "none",
              background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
            },
          }}
        >
          {isDarkTheme ? (
            <Brightness7Icon style={{ fontSize: "45px", position:"relative",left:"3.5em" }} />
          ) : (
            <Brightness4Icon style={{ fontSize: "45px",position:"relative",left:"3.5em" }} />
          )}
        </ListItemButton>
      </ListItem>
    </List>
  );
}


