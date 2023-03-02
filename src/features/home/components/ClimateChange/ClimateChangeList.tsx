import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { ListHeading } from "../LatestArticles/ListHeading";
import { Card } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ClimateChangeCard } from "./ClimateChangeCard";

interface ClimateChangeListProps {
  listTitle: string;
  data: Card[];
}

const ClimateChangeList: React.FC<ClimateChangeListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        rowSpacing={width < 600 ? 3 : 0}
        columnSpacing={2}
        sx={{ padding: "30px 0px" }}
        container
      >
        {props.data?.map((item: any) => (
          <ClimateChangeCard
            key={nanoid()}
            id={item.id}
            title={item.title}
            image_url={item.image_url}
            body={item.body}
            date={item.date}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ClimateChangeList;
