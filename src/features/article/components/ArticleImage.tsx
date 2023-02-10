import { Box, Typography } from "@mui/material";
import React from "react";

interface ArticleImageProps {
  Title: string | undefined;
  Image: string | undefined;
}

export const ArticleImage = ({ Title, Image }: ArticleImageProps) => {
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Typography
        variant="h1"
        component={"h1"}
        gutterBottom
        sx={{ fontSize: "42px", fontWeight: 500, paddingBottom: "20px" }}
      >
        {Title}
      </Typography>
      <Box>
        <img style={{ width: "100%" }} src={Image} alt={Title} />
      </Box>
    </Box>
  );
};
