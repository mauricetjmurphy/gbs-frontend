import React from "react";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { ListHeading } from "../../home/components/LatestArticles/ListHeading";
import { Card } from "../../home/types";

import ArticleCard from "./ArticleCard";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle: string;
  currentPage: number;
  perPage: number;
}

export const AllArticlesList: React.FC<BlogCardListProps> = (props) => {
  const { width } = useWindowSize();
  const startIndex = (props.currentPage - 1) * props.perPage;
  const endIndex = startIndex + props.perPage;
  const currentData = props.data?.slice(startIndex, endIndex);

  return (
    <Grid
      minHeight={"1100px"}
      columnSpacing={3}
      rowSpacing={2}
      container
      sx={{ background: "#fff", padding: "20px" }}
    >
      {currentData?.map((item: Card) => (
        <ArticleCard
          key={nanoid()}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
          body={item.body}
        />
      ))}
    </Grid>
  );
};
