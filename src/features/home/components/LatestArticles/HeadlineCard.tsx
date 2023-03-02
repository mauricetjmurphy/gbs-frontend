import React from "react";
import { useNavigate } from "react-router";
import { Typography, Box, Button, styled } from "@mui/material";

import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { formatDate } from "../../../../utils/formatDate";
import { BUCKET_URL } from "../../../../config";

interface HeadlineCardProps {
  id: string | undefined;
  title: string;
  image_url: string | undefined;
  body: Section;
  date: string;
}

const BackButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    backgroundColor: "transparent",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0px 20px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "20px 10px",
  },
}));

export const HeadlineCard: React.FC<HeadlineCardProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <BackButton
      disableRipple
      fullWidth
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img
          width={540}
          height={360}
          srcSet={`/images/SM-placeholder.png 640w,
          /images/SM-placeholder.png 960w, 
          /images/SM-placeholder.png 1280w, 
          /images/SM-placeholder.png 1920w`}
          sizes="(max-width: 600px) 640px, (max-width: 960px) 960px, (max-width: 1280px) 1280px, 1920px"
          src={`/images/SM-placeholder.png`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
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
        <Typography sx={{}} variant={"body1"} component={"p"}>
          {`${props.body.paragraphs[0].split(".")[0]}.` +
            `${props.body.paragraphs[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </BackButton>
  );
};
