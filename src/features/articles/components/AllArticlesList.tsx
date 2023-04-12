import React from "react";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../home/types";

import { ArticleCard } from "./ArticleCard";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle: string;
  currentPage: number;
  perPage: number;
}

export const AllArticlesList: React.FC<BlogCardListProps> = (props) => {
  const startIndex = (props.currentPage - 1) * props.perPage;
  const endIndex = startIndex + props.perPage;
  const currentData = props.data?.slice(startIndex, endIndex);

  return (
    <Grid
      minHeight={"1100px"}
      container
      sx={{ background: "#fff", padding: "20px" }}
    >
      {currentData?.map((item: Card) => (
        <ArticleCard
          key={nanoid()}
          id={item.Id}
          title={item.Title}
          image_url={item.Image_url}
          body={item.Body}
        />
      ))}
    </Grid>
  );
};
