import { Box, Typography } from "@mui/material";
import React from "react";

type ArticleTextParaProps = {
  title: string;
  text: string;
};

export const ArticleSection = ({ title, text }: ArticleTextParaProps) => {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Typography gutterBottom sx={{ fontSize: "22px", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: "18px", letterSpacing: ".5px", color: "#292929" }}
      >
        {text}
      </Typography>
    </Box>
  );
};
