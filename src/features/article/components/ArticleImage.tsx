import { Box, Typography } from "@mui/material";
import React from "react";

type ArticleImageProps = {
  title: string | undefined;
  image: string | undefined;
};

export const ArticleImage = ({ title, image }: ArticleImageProps) => {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Typography
        variant="h1"
        component={"h1"}
        gutterBottom
        sx={{ fontSize: "42px", fontWeight: 500, paddingBottom: "20px" }}
      >
        {title}
      </Typography>
      <Box>
        <img style={{ width: "100%" }} src={image} alt={title} />
      </Box>
    </Box>
  );
};
