import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Grid, Typography } from "@mui/material";

import { formatDate } from "../../../../utils/formatDate";
import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

interface ClimateChangeCardProps {
  id: string | undefined;
  title: string;
  image_url: string | undefined;
  body: Section[];
  date: string;
}

export const ClimateChangeCard: React.FC<ClimateChangeCardProps> = (props) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <Grid sx={{}} xs={12} md={6} item>
      <Button
        disableRipple
        fullWidth
        onClick={() => {
          navigate(`/article/${props.id}`);
        }}
        sx={{
          textTransform: "none",
          padding: "0px",
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            padding: "10px 10px",
          }}
        >
          <Typography variant="subtitle1" component={"h2"}>
            {formatDate(props.date)}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "100%" }}>
          <Typography
            variant="h2"
            component="h1"
            color="#000"
            gutterBottom
            sx={{
              fontWeight: 400,
              paddingTop: "20px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {props.title}
          </Typography>
          <Typography sx={{}} variant={"body2"} component={"p"}>
            {`${props.body[0].text[0].split(".")[0]}.` +
              `${props.body[0].text[0].split(".")[1]}.`}
          </Typography>
        </Box>
      </Button>
    </Grid>
  );
};
