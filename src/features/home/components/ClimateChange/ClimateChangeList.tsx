import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { ListHeading } from "../LatestArticles/ListHeading";
import { Card } from "../../types";

import { ClimateChangeCard } from "./ClimateChangeCard";

interface ClimateChangeListProps {
  listTitle: string;
  data: Card[];
}

export const ClimateChangeList: React.FC<ClimateChangeListProps> = (props) => {
  console.log(props.data?.slice(0, 2));

  return (
    <Box>
      <ListHeading listTitle={props.listTitle} />
      <Grid columnSpacing={2} sx={{ padding: "30px 0px" }} container>
        {props.data?.slice(9, 11).map((item: any) => (
          <ClimateChangeCard
            key={nanoid()}
            id={item.Id}
            title={item.Title}
            image_url={item.Image_url}
            body={item.Body}
            date={item.Date}
          />
        ))}
      </Grid>
    </Box>
  );
};
