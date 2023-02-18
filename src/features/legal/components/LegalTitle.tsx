import React from "react";
import { Box, Typography } from "@mui/material";

interface LegalTitleProps {
  title: string;
}

export const LegalTitle: React.FC<LegalTitleProps> = (props) => {
  return (
    <Box
      sx={{
        height: "250px",
        width: "100vw",
        background: "#ffb67c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #000",
        borderTop: "1px solid #000",
      }}
    >
      <Typography
        variant={"h1"}
        component={"h1"}
        sx={{ fontSize: "62px", textAlign: "center" }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};
