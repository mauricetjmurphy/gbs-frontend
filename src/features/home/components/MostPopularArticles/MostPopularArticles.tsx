import React from "react";
import { Box, Grid, List, ListItemButton } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { ListHeading } from "../LatestArticles/ListHeading";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { MostPopularCard } from "./MostPopularCard";

interface MostPopularArticlesProps {
  data: Card[] | undefined;
  listTitle: string;
}

export const MostPopularArticles: React.FC<MostPopularArticlesProps> = (
  props
) => {
  const { width } = useWindowSize();

  return (
    <Box sx={{ padding: width > 600 ? "30px 10px" : "30px 0px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        container
        wrap={"nowrap"}
        sx={{
          margin: "20px 0",
          padding: "0px",
          justifyContent: "center",
        }}
      >
        {props.data?.slice(6, 10).map((item: Card) => (
          <MostPopularCard
            key={nanoid()}
            id={item.Id}
            title={item.Title}
            image_url={item.Image_url}
            body={item.Body}
          />
        ))}
      </Grid>
    </Box>
  );
};
