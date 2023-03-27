import React from "react";
import { Box } from "@mui/material";

import { BUCKET_URL, CF_IMAGE_URL } from "../../../config";

interface ArticleImageProps {
  title: string | undefined;
  image_url: string | undefined;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <img
        src={`${CF_IMAGE_URL}/${props.image_url}`}
        alt={props.title}
        style={{ width: "100%" }}
      />
    </Box>
  );
};
