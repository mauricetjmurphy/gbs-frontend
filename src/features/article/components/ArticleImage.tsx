import { Box, Typography } from "@mui/material";
import React from "react";

type ArticleImageProps = {
  title: string | undefined;
  image: string | undefined;
};

export const ArticleImage = ({ title, image }: ArticleImageProps) => {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Typography gutterBottom sx={{ fontSize: "42px", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box>
        <img style={{ width: "100%" }} src={image} alt={title} />
      </Box>
    </Box>
  );
};
