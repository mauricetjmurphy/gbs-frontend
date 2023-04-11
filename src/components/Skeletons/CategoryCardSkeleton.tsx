import { Box, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const CategoryCardSkeleton = (props: Props) => {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={150}
        sx={{ marginBottom: "10px", borderRadius: "4px" }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"70%"}
        height={24}
        sx={{ margin: "20px auto", borderRadius: "4px" }}
      />
    </Box>
  );
};

export default CategoryCardSkeleton;
