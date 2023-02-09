import React from "react";
import { Grid } from "@mui/material";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { Card } from "../../types";

import { BlogCardList } from "./BlogCardList";
import { PostCardList } from "./PostCardList";
import { HeadlineCard } from "./HeadlineCard";

const testCards = [
  {
    id: "1",
    image_url:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    title: "title1",
    category: "category1",
    body: [],
    author: "author1",
    date: "date1",
  },
  {
    id: "2",
    image_url:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    title: "title2",
    category: "category2",
    body: [],
    author: "author2",
    date: "date2",
  },
];

interface LatestArticlesProps {
  data: Card[] | undefined;
}

export const LatestArticles: React.FC<LatestArticlesProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Grid
      container
      sx={{ background: "#fff", padding: width > 600 ? "40px" : "10px" }}
    >
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList
          data={props.data?.slice(1, 3)}
          listTitle={"Top Stories"}
        />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {props.data && (
          <HeadlineCard
            id={props.data[0].id}
            title={props.data[0].title}
            image_url={props.data[0].image_url}
            body={props.data[0].body}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={props.data} listTitle={"Opinion"} />
      </Grid>
    </Grid>
  );
};
