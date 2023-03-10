import { Box, Typography } from "@mui/material";
import React from "react";

interface ArticleTextParaProps {
  text: string;
}

export const ArticleSection: React.FC<ArticleTextParaProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "30px" }}>
      <Typography
        variant="body1"
        sx={{ letterSpacing: ".5px", color: "#292929" }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};
