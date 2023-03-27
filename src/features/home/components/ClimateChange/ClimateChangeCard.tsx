import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Grid, Typography } from "@mui/material";

import { formatDate } from "../../../../utils/formatDate";
import { Section } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { CF_IMAGE_URL } from "../../../../config";

interface ClimateChangeCardProps {
  id: string | undefined;
  title: string;
  image_url: string | undefined;
  body: Section;
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
          src={`${CF_IMAGE_URL}/${props.image_url}`}
          alt={props.title}
          style={{ width: "100%" }}
          loading={"lazy"}
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
            {`${props.body.paragraphs[0].split(".")[0]}.` +
              `${props.body.paragraphs[0].split(".")[1]}.`}
          </Typography>
        </Box>
      </Button>
    </Grid>
  );
};
