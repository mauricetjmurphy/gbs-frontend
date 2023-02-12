import { Box, Typography } from "@mui/material";
import React from "react";
import { getRandomNumber } from "../../../utils/getRandomNumber";

interface ArticleImageProps {
  title: string | undefined;
  image: string | undefined;
}

export const ArticleImage: React.FC<ArticleImageProps> = (props) => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <img
        style={{ width: "100%" }}
        src={`https://d1rifiwqqas523.cloudfront.net/0${getRandomNumber()}.jpg`}
        alt={props.title}
      />
    </Box>
  );
};
