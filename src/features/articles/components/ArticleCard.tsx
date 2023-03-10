import React from "react";
import { useNavigate } from "react-router";
import { Box, Grid, Typography } from "@mui/material";

import { Section } from "../../home/types";

interface ArticleCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      md={3}
      xs={12}
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
    >
      <Box>
        <img
          srcSet={`/images/SM-placeholder.png 640w,
          /imagesSM-placeholder.png 960w, 
          /images/SM-placeholder.png 1280w, 
          /images/SM-placeholder.png 1920w`}
          sizes="(max-width: 600px) 640px, (max-width: 960px) 960px, (max-width: 1280px) 1280px, 1920px"
          src={`/images/SM-placeholder.png`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{ textAlign: "left", width: "100%", padding: "10px 0px 20px 0px" }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="#000"
          gutterBottom
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{}} variant={"body2"} component={"p"}>
          {`${props.body.paragraphs[0].split(".")[0]}.` +
            `${props.body.paragraphs[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ArticleCard;
