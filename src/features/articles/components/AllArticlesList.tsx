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
}

export const AllArticlesList: React.FC<BlogCardListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Grid
      columnSpacing={3}
      rowSpacing={2}
      container
      sx={{ background: "#fff", padding: "20px" }}
    >
      {props.data?.map((item: Card) => (
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
