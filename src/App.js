import "./css/App.css";
import NavRoutes from "./components/NavRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Widgets from "../src/components/widgets";

const darkTheme = {
  palette: {
    mode: "dark",
    background:{
      default: "black",

    }
  },
  typography: {
    fontFamily: ["Work Sans"].join(","),
  },
};
const lightTheme = {
  palette: {
    mode: "light",
    background:{
      default: "#DDE4E7"
    }
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
      <Widgets
      isDarkTheme={isDarkTheme} 
      themeToggle={themeToggle}/>
    <Box>
      <Box sx={{position: "absolute",top: "10px",left:"50%", right:"50%", zIndex:"999",}}>
      </Box>
      <NavRoutes 
      isDarkTheme={isDarkTheme}
      />
      </Box>
    </ThemeProvider>
  );
}

export default App;
