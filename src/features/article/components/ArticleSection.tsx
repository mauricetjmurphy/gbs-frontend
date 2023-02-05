import { Box, Typography } from "@mui/material";
import React from "react";

type ArticleTextParaProps = {
  title: string;
  text: string;
};

export const ArticleSection = ({ title, text }: ArticleTextParaProps) => {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Typography
        variant="h1"
        component={"h1"}
        sx={{ fontSize: "22px", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "15px", letterSpacing: ".5px", color: "#292929" }}
      >
        {text}
      </Typography>
    </Box>
  );
};
