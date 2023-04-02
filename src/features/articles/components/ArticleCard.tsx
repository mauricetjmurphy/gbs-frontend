import React from "react";
import { useNavigate } from "react-router";
import { Box, Grid, Typography } from "@mui/material";

import { CF_IMAGE_URL } from "../../../config";

interface ArticleCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      md={3}
      xs={12}
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
    >
      <Box>
        <img
          src={`${CF_IMAGE_URL}/${props.image_url}`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{ textAlign: "left", width: "100%", padding: "10px 0px 20px 0px" }}
      >
        <Typography
          variant="h3"
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
          {`${props.body && props.body[0].split(".")[0]}.` +
            `${props.body && props.body[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ArticleCard;
