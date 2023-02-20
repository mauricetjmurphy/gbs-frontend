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
        srcSet={`/images/${props.image_url?.split(".")[0]}-small.jpg 640w,
          /images/${props.image_url?.split(".")[0]}-medium.jpg 960w, 
          /images/${props.image_url?.split(".")[0]}-large.jpg 1280w, 
          /images/${props.image_url?.split(".")[0]}-xl.jpg 1920w`}
        sizes="(max-width: 600px) 640px, (max-width: 960px) 960px, (max-width: 1280px) 1280px, 1920px"
        src={`/images/${props.image_url?.split(".")[0]}-xl.jpg`}
        alt={props.title}
        style={{ width: "100%" }}
      />
    </Box>
  );
};
