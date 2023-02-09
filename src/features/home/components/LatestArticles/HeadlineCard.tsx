import React from "react";
import { useNavigate } from "react-router";
import { Typography, Box, Button } from "@mui/material";

import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

interface HeadlineCardProps {
  id: string | undefined;
  title: string;
  image_url: string | undefined;
  body: Section[];
}

export const HeadlineCard: React.FC<HeadlineCardProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Button
      disableRipple
      fullWidth
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        padding: width > 600 ? "0px 20px" : "20px 10px",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img
          src={props.image_url}
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
            fontSize: "32px",
            paddingTop: "20px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
          {`${props.body[0].text.split(".")[0]}.` +
            `${props.body[0].text.split(".")[1]}.`}
        </Typography>
      </Box>
    </Button>
  );
};
