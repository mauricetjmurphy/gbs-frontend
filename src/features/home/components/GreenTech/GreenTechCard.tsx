import React from "react";
import { useNavigate } from "react-router";
import { Typography, Box, Grid } from "@mui/material";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { CF_IMAGE_URL } from "../../../../config";
import { formatBodyText } from "../../../../utils/formatBodyText";

interface MostPopularCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: string[];
}

export const GreenTechCard: React.FC<MostPopularCardProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Grid
      item
      md={3}
      xs={12}
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box>
        <img
          src={`${CF_IMAGE_URL}/${props.image_url}`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ textAlign: "left", width: "100%" }}>
        <Typography
          sx={{
            paddingTop: "20px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          variant="h3"
          component="h1"
          color="#000"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
          {formatBodyText(props.body)}
        </Typography>
      </Box>
    </Grid>
  );
};
