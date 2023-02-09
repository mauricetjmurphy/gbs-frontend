import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

import { type Section } from "../../features/home/types";
import { useWindowSize } from "../../hooks/useWindowSize";

interface ListImageCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section[];
}

export const ImageCard = ({
  id,
  title,
  image_url,
  body,
}: ListImageCardProps) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <Button
      onClick={() => {
        navigate(`/article/${id}`);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "24px 0px 0px 0px",
        width: "100%",
        "&:hover": {
          backgroundColor: "transparent",
        },
        ".MuiButton-text": { padding: "0px" },
      }}
      disableRipple
    >
      <Box sx={{ width: "100%" }}>
        <img
          src={image_url}
          style={{
            height: "100%",
            width: "100%",
            border: "none",
          }}
          alt={title}
        />
      </Box>
      <Box>
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
          {`${body[0].text.split(".")[0]}.`}
        </Typography>
      </Box>
    </Button>
  );
};
