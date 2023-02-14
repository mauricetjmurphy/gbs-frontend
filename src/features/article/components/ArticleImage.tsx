import React from "react";
import { Box } from "@mui/material";

import { BUCKET_URL } from "../../../config";

interface ArticleImageProps {
  title: string | undefined;
  image: string | undefined;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <img
        style={{ width: "100%" }}
        src={`/images/${props.image}`}
        alt={props.title}
      />
    </Box>
  );
};
