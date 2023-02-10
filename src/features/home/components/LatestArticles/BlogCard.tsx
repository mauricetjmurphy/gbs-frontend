import React from "react";
import { useNavigate } from "react-router";
import { ListItemButton, Typography, Box } from "@mui/material";

import { Section } from "../../types";

interface BlogCardProps {
  Id: string;
  Title: string;
  Image_url: string | undefined;
  Body: Section[];
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <ListItemButton
      disableRipple
      onClick={() => {
        navigate(`/article/${props.Id}`);
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
          src={props.Image_url}
          alt={props.Title}
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
          {props.Title}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
          {`${props.Body[0].text.split(".")[0]}.` +
            `${props.Body[0].text.split(".")[1]}.`}
        </Typography>
      </Box>
    </ListItemButton>
  );
};
