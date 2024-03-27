import {
  List,
  ListItem,
  ListItemButton,
  Typography
} from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../css/widgets.css";

export default function Widgets({ themeToggle, isDarkTheme }) {
    const linkGH = () => window.open("https://github.com/mctastic", "_blank")
    const linkLink = () => window.open("https://www.linkedin.com/in/smccarthydev/", "_blank")
  return (
    <List
      sx={{
        position: "fixed",
        bottom: "2em",
        left: { xs: "-1rem", md: "1rem" },
        zIndex: 999
      }}
    >
            <ListItem>
        <ListItemButton
          disableRipple
          onClick={themeToggle}
          sx={{
            // backgroundImage: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
            borderRadius: "0 30px 30px 0",
            transform: "translate(-180px, 0)",
            transition: "all 1s",
          }}
        >
          <div className="toggle">
            <input
              type="checkbox"
              id="themeToggle"
              onChange={themeToggle}
              checked={!isDarkTheme}
            />
            <label htmlFor="themeToggle" className="label"></label>
          </div>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          disableRipple
          onClick={() => linkGH()}
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
          onClick={()=> linkLink()}
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
              left:"-1px"
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
    </List>
  );
}