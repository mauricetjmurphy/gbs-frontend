import { Box, Typography } from "@mui/material";
import React from "react";

interface ArticleImageProps {
  title: string | undefined;
  image: string | undefined;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <img style={{ width: "100%" }} src={props.image} alt={props.title} />
    </Box>
  );
};
