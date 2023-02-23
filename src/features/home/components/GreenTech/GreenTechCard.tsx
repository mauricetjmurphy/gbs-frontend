import React from "react";
import { useNavigate } from "react-router";
import { Typography, Box, Grid } from "@mui/material";

import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

interface MostPopularCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section;
}

export const GreenTechCard: React.FC<MostPopularCardProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Grid
      item
      md={3}
      xs={12}
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box>
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
      <Box sx={{ textAlign: "left", width: "100%" }}>
        <Typography
          sx={{
            paddingTop: "20px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          variant="h3"
          component="h1"
          color="#000"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
          {`${props.body.paragraphs[0].split(".")[0]}.` +
            `${props.body.paragraphs[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </Grid>
  );
};
