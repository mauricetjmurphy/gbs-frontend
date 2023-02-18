import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {};

const UnderConstruction = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <Typography
          sx={{ textAlign: "center", padding: "20px 0px" }}
          variant={"h1"}
          component={"h1"}
        >
          Sorry, this page is under construction
        </Typography>
        <Button
          color="inherit"
          sx={{ textAlign: "center" }}
          variant="outlined"
          onClick={() => navigate("/")}
        >
          Back home
        </Button>
      </>
    </Box>
  );
};

export default UnderConstruction;
