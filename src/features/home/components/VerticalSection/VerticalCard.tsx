import { Box } from "@mui/material";
import React from "react";
import { MainImageCard } from "../../../../components/Card/MainImageCard";
import { Post } from "../../types";
import { verticalSectionStyles } from "./verticalSection.styles";

type VerticalCardProps = { data: Post[] | undefined };

export const VerticalCard = ({ data }: VerticalCardProps) => {
  return (
    <Box sx={verticalSectionStyles.verticalCardContainer}>
      <MainImageCard data={data} />
    </Box>
  );
};
