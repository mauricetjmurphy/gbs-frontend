import React from "react";
import { Box, Typography } from "@mui/material";

interface LegalTitleProps {
  title: string;
}

export const LegalTitle: React.FC<LegalTitleProps> = (props) => {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100vw",
        background: "#75bf75",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        borderTop: "1px solid #ccc",
      }}
    >
      <Typography
        variant={"h1"}
        component={"h1"}
        sx={{ fontSize: "48px", textAlign: "center" }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};
