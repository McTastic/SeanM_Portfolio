import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useState } from "react";

export default function theme(){  

// const [modeState, setModeState] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    },
    typography: {
      fontFamily: ["Work Sans"].join(","),
    },
  });
}