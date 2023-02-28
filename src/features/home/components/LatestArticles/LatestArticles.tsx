import React from "react";
import { Grid } from "@mui/material";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { Card } from "../../types";

import { BlogCardList } from "./BlogCardList";
import { PostCardList } from "./PostCardList";
import { HeadlineCard } from "./HeadlineCard";

interface LatestArticlesProps {
  techData: Card[];
  climateData: Card[];
}

export const LatestArticles: React.FC<LatestArticlesProps> = (props) => {
  const { width } = useWindowSize();

  const data = [...props.climateData, ...props.techData];

  return (
    <Grid
      container
      sx={{ background: "#fff", padding: width > 600 ? "40px" : "10px" }}
    >
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList data={data?.slice(0, 2)} listTitle={"Top Stories"} />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {data && (
          <HeadlineCard
            id={data[2].id}
            title={data[2].title}
            image_url={data[2].image_url}
            body={data[2].body}
            date={data[2].date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={data?.slice(3, 6)} listTitle={"Opinion"} />
      </Grid>
    </Grid>
  );
};
