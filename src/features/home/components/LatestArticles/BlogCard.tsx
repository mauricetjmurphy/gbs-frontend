import React from "react";
import { useNavigate } from "react-router";
import { ListItemButton, Typography, Box } from "@mui/material";

import { Section } from "../../types";

interface BlogCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section[];
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <ListItemButton
      disableRipple
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        display: "flex",
        padding: "0px",
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
      <Box
        sx={{ textAlign: "left", width: "100%", padding: "10px 0px 20px 0px" }}
      >
        <Typography
          variant="h1"
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
          {`${props.body[0].text[0].split(".")[0]}.` +
            `${props.body[0].text[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </ListItemButton>
  );
};
