import { Typography } from "@mui/material";
import React from "react";

interface ArticleTitleProps {
  title: string | undefined;
}

export const ArticleTitle: React.FC<ArticleTitleProps> = (props) => {
  return (
    <Typography
      variant="h1"
      component={"h1"}
      sx={{ fontSize: "28px", marginBottom: "20px" }}
    >
      {props.title}
    </Typography>
  );
};
