import "./css/App.css";
import NavRoutes from "./components/NavRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const darkTheme = {
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: ["Work Sans"].join(","),
    text:{
      primary: "#ffff"
    }
  },
};
const lightTheme = {
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: ["Work Sans"].join(","),
  },
};

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true)

  return( 
    <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
    <CssBaseline />
  <NavRoutes />
  </ThemeProvider>
  )
}

export default App;
