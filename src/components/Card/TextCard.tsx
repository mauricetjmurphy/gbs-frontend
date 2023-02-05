import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import ImageIcon from "@mui/icons-material/Image";
import { Section } from "../../features/home/types";

type TextCardProps = {
  title: string;
  id: string;
  body: Section[];
};

export const TextCard = ({ title, id, body }: TextCardProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/article/${id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#fff",
        },
      }}
      disableRipple
    >
      <ListItem
        sx={{ display: "flex", flexDirection: "column", padding: "18px 0px" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0px",
            width: "100%",
            ".MuiAvatar-root": {
              width: "32px",
              height: "32px",
            },
          }}
        >
          <ListItemAvatar
            sx={{
              display: "flex",
              justifyContent: "start",
              minWidth: "0px",
              paddingRight: "12px",
            }}
          >
            <Avatar
              sx={{
                ".MuiSvgIcon-root": {
                  width: "18px",
                },
              }}
            >
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6" component={"h1"}>
              Admin
            </Typography>
            <Typography variant="h6" component={"h2"}>
              Dec 15, 2022
            </Typography>
          </ListItemText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
            padding: "0px",
          }}
        >
          <ListItemText>
            <Typography
              variant="h1"
              component="h1"
              color="#000"
              sx={{
                textAlign: "left",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant={"body2"}
              component={"p"}
              sx={{
                textAlign: "left",
              }}
            >
              {body && `${body[0].text.split(".")[0]}.`}
            </Typography>
          </ListItemText>
        </Box>
      </ListItem>
    </Button>
  );
};
