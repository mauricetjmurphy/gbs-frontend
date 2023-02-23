import React from "react";
import { Grid } from "@mui/material";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { Card } from "../../types";

import { BlogCardList } from "./BlogCardList";
import { PostCardList } from "./PostCardList";
import { HeadlineCard } from "./HeadlineCard";

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
          data={props.data?.slice(0, 2)}
          listTitle={"Top Stories"}
        />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {props.data && (
          <HeadlineCard
            id={props.data[2].id}
            title={props.data[2].title}
            image_url={props.data[2].image_url}
            body={props.data[2].body}
            date={props.data[2].date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={props.data?.slice(3, 6)} listTitle={"Opinion"} />
      </Grid>
    </Grid>
  );
};
