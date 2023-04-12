import React from "react";
import { useNavigate } from "react-router";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { formatDate } from "../../../utils/formatDate";
import { CommentIcon } from "../../../components/CommentIcon/CommentIcon";

interface OpinionCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: string[];
  author: string;
  date: string;
}

export const OpinionCard: React.FC<OpinionCardProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Grid
      sm={12}
      md={3}
      item
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          border: "1px solid #cccccc",
          borderRadius: "4px",
          height: "100%",
          padding: "20px",
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
          sx={{
            textAlign: "left",
            width: "100%",
            padding: "10px 0px 20px 0px",
            minHeight: "315px",
          }}
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
            {props.body && `${props.body[0].split(".")[0]}.`}
          </Typography>
        </Box>
        <Divider />
        <Box padding={"20px 0 0 0"} display={"flex"}>
          <CommentIcon />
          <Typography
            sx={{ padding: "0 5px" }}
            variant={"body2"}
          >{`${0}`}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
