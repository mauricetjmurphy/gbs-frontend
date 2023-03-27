import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { ListHeading } from "../LatestArticles/ListHeading";
import { Card } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ClimateChangeCard } from "./ClimateChangeCard";

interface ClimateChangeListProps {
  listTitle: string;
  data: Card[] | undefined;
}

const ClimateChangeList: React.FC<ClimateChangeListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box padding={{ xs: "10px", sm: "20px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={2}
        sx={{ padding: "30px 0px" }}
        container
        direction={"row"}
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
