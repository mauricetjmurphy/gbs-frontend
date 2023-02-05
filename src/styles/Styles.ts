import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "22px",
      fontWeight: 400,
      textTransform: "none",
      fontFamily: "Fraunces-VariableFont",
      color: "#000",
    },
    h2: {
      fontWeight: 400,
      textTransform: "none",
      fontFamily: "Fraunces-VariableFont",
      color: "#000",
    },
    h6: {
      fontSize: "12px",
      textTransform: "none",
      fontFamily: "Poppins-regular",
      color: "#000",
    },
    body1: {
      fontSize: "18px",
      textTransform: "none",
      fontFamily: "Poppins-regular",
      color: "#000",
    },
    body2: {
      fontSize: "14px",
      textTransform: "none",
      fontFamily: "Poppins-regular",
      color: "#000",
    },
  },
});

export default theme;
