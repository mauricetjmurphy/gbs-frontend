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
    <Box padding={{ xs: "10px", sm: "50px 10px 50px 10px" }}>
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

export default ClimateChangeList;
