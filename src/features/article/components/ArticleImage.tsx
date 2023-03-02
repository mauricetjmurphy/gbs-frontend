import React from "react";
import { Box } from "@mui/material";

import { BUCKET_URL } from "../../../config";

interface ArticleImageProps {
  title: string | undefined;
  image_url: string | undefined;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <img
        srcSet={`/images/SM-placeholder.png 640w,
          /images/SM-placeholder.png 960w, 
          /images/SM-placeholder.png 1280w, 
          /images/SM-placeholder.png 1920w`}
        sizes="(max-width: 600px) 640px, (max-width: 960px) 960px, (max-width: 1280px) 1280px, 1920px"
        src={`/images/SM-placeholder.png`}
        alt={props.title}
        style={{ width: "100%" }}
      />
    </Box>
  );
};
