import { createTheme } from "@mui/material";

const POPPINS_FONT = "Poppins-regular";
const FRAUNCES_FONT = "Fraunces-VariableFont";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "22px",
      fontWeight: 400,
      textTransform: "none",
      fontFamily: FRAUNCES_FONT,
      color: "#000",
    },
    h2: {
      fontWeight: 400,
      textTransform: "none",
      fontFamily: FRAUNCES_FONT,
      color: "#000",
    },
    h6: {
      fontSize: "12px",
      textTransform: "none",
      fontFamily: POPPINS_FONT,
      color: "#000",
    },
    body1: {
      fontSize: "18px",
      textTransform: "none",
      fontFamily: POPPINS_FONT,
      color: "#000",
    },
    body2: {
      fontSize: "14px",
      textTransform: "none",
      fontFamily: POPPINS_FONT,
      color: "#000",
    },
  },
});

export default theme;
