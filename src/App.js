import "./css/App.css";
import NavRoutes from "./components/NavRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const darkTheme = {
  palette: {
    mode: "dark",
    background:{
      default: "black"
    }
  },
  typography: {
    fontFamily: ["Work Sans"].join(","),
    text: {},
  },
};
const lightTheme = {
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Work Sans"].join(","),
  },
};

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const themeToggle = () =>{
    setDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider
      theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}
    >
      <CssBaseline />
      <Box sx={{position: "absolute",top: "10px",left:"50%", right:"50%", zIndex:"999",}}>
        <IconButton onClick={themeToggle}>
          {isDarkTheme ? <Brightness7Icon fontSize="large" /> : <Brightness4Icon fontSize="large"/>}
        </IconButton>
      </Box>
      <NavRoutes />
    </ThemeProvider>
  );
}

export default App;
