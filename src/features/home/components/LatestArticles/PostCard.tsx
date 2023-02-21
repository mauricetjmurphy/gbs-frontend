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
import PersonIcon from "@mui/icons-material/Person";

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
        display: "flex",
        padding: "0px",
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
        }}
      >
        <ListItemAvatar
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            minWidth: 50,
          }}
        >
          <Avatar sx={{ width: "35px", height: "35px" }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="subtitle1" component={"h1"}>
            {props.author}
          </Typography>
          <Typography variant="subtitle1" component={"h2"}>
            {formatDate(props.date)}
          </Typography>
        </ListItemText>
      </Box>
      <Box
        sx={{ textAlign: "left", width: "100%", padding: "10px 0px 20px 0px" }}
      >
        <Typography
          variant="h3"
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
      </Box>
    </ListItemButton>
  );
};
