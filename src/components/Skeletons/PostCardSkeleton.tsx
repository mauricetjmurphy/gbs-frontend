import { Box, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const PostCardSkeleton = (props: Props) => {
  return (
    <Box padding={"15px 5px 30px 5px"}>
      <Box display={"flex"} alignItems={"center"} sx={{ marginBottom: "10px" }}>
        <Skeleton
          sx={{ marginRight: "20px" }}
          animation="wave"
          variant="circular"
          width={35}
          height={35}
        />
        <Box>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100px"}
            height={12}
            sx={{ marginBottom: "5px", borderRadius: "4px" }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={12}
            sx={{ marginBottom: "5px", borderRadius: "4px" }}
          />
        </Box>
      </Box>

      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={24}
        sx={{ marginBottom: "5px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={24}
        sx={{ marginBottom: "5px", borderRadius: "4px" }}
      />
    </Box>
  );
};

export default PostCardSkeleton;
