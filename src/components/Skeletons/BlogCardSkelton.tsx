import { Box, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const BlogCardSkelton = (props: Props) => {
  return (
    <Box padding={"15px 5px 30px 5px"}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={150}
        sx={{ marginBottom: "15px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={18}
        sx={{ marginBottom: "5px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={18}
        sx={{ borderRadius: "4px" }}
      />
    </Box>
  );
};

export default BlogCardSkelton;
