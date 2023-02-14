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
        padding: "20px 0px",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box>
        <img
          src={`/images/${props.image_url}`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ textAlign: "left", width: "100%" }}>
        <Typography
          variant="h1"
          component="h1"
          color="#000"
          gutterBottom
          sx={{
            paddingTop: "20px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
          {`${props.body[0].text[0].split(".")[0]}.` +
            `${props.body[0].text[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </ListItemButton>
  );
};
