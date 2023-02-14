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
          data={props.data?.slice(1, 3)}
          listTitle={"Top Stories"}
        />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {props.data && (
          <HeadlineCard
            id={props.data[0].Id}
            title={props.data[0].Title}
            image_url={props.data[0].Image_url}
            body={props.data[0].Body}
            date={props.data[0].Date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={props.data} listTitle={"Opinion"} />
      </Grid>
    </Grid>
  );
};
