import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { Post } from "../../features/home/types";
import { formatDate } from "../../utils/formatDate";

type MainImageCardProps = {
  data: Post[] | undefined;
};

export const MainImageCard: React.FC<MainImageCardProps> = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const post = data && data[0];

  // if (isLoading) return <h1>"Loading..."</h1>;
  // if (error) return <h1>"An error has occurred"</h1>;

  return (
    <Button
      onClick={() => navigate(`/article/${post?.id}`)}
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
      <Box sx={{ width: "100%" }}>
        <img
          src={post?.image_url}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            border: "none",
          }}
          alt={post?.title || "image"}
        />
      </Box>
      <Box>
        <Typography
          variant={"h6"}
          component={"h2"}
          sx={{ textAlign: "left", padding: "26px 0px" }}
        >
          {formatDate(new Date())}
        </Typography>
        <Typography
          gutterBottom
          variant="h1"
          component="h1"
          sx={{
            fontSize: "64px",
            textAlign: "left",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {post?.title}
        </Typography>
        <Typography
          style={{ textAlign: "left", fontSize: "18px" }}
          variant="body1"
          component="p"
        >
          {post &&
            post.body[0].text.split(".")[0] + post.body[0].text.split(".")[1]}
          ...
        </Typography>
      </Box>
    </Button>
  );
};
