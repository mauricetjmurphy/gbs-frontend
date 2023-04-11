import { Box, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const HeadlineSkeleton = (props: Props) => {
  return (
    <Box padding={"20px 5px"}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={315}
        sx={{ marginBottom: "8.5px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100px"}
        height={12}
        sx={{ marginBottom: "20px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={32}
        sx={{ marginBottom: "5px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={16}
        sx={{ marginBottom: "5px", borderRadius: "4px" }}
      />
    </Box>
  );
};

export default HeadlineSkeleton;
