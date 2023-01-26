import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { Post } from "../../features/home/types";

type VerticalCard2Props = {
  data: Post[] | undefined;
};

export const MainImageCard = ({ data }: VerticalCard2Props) => {
  const navigate = useNavigate();
  // if (isLoading) return <h1>"Loading..."</h1>;

  // if (error) return <h1>"An error has occurred"</h1>;

  return (
    <Button
      onClick={() => navigate(`/article/${data && data[2].id}`)}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        borderRadius: "25px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      disableRipple
    >
      <Box sx={{ height: "500px", width: "100%" }}>
        <img
          src={data && data[2].image_url}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            borderRadius: "25px",
          }}
          alt={data && data[2].title}
        />
      </Box>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          color="#3b82f6"
          sx={{ fontWeight: "bold", paddingTop: "20px", textAlign: "left" }}
        >
          {data && data[2].category}
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {data && data[2].title}
        </Typography>
        <Typography
          style={{ textAlign: "left" }}
          variant="h6"
          component="h3"
          color={"#6b7280"}
        >
          {data &&
            data[2].body[0].text.split(".")[0] +
              data[2].body[0].text.split(".")[1]}
          ...
        </Typography>
      </Box>
    </Button>
  );
};
