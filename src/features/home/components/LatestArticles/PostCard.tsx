import React from "react";
import { useNavigate } from "react-router";
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { formatDate } from "../../../../utils/formatDate";

interface PostCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section[];
  author: string;
  date: string;
}

export const PostCard: React.FC<PostCardProps> = (props) => {
  const { width } = useWindowSize();
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          paddingBottom: "10px",
        }}
      >
        <ListItemAvatar sx={{}}>
          <Avatar sx={{}}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6" component={"h1"}>
            {props.author}
          </Typography>
          <Typography variant="h6" component={"h2"}>
            {formatDate(props.date)}
          </Typography>
        </ListItemText>
      </Box>
      <ListItemText sx={{ textAlign: "left", width: "100%" }}>
        <Typography
          variant="h1"
          component="h1"
          color="#000"
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant={"body2"} component={"p"} sx={{}}>
          {props.body && `${props.body[0].text[0].split(".")[0]}.`}
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};
