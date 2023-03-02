import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { ListHeading } from "../LatestArticles/ListHeading";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { GreenTechCard } from "./GreenTechCard";

interface MostPopularArticlesProps {
  data: Card[] | undefined;
  listTitle: string;
}

const GreenTechList: React.FC<MostPopularArticlesProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box sx={{ padding: "30px 0px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        rowSpacing={width < 600 ? 3 : 0}
        columnSpacing={2}
        container
        wrap={width > 600 ? "nowrap" : "wrap"}
        sx={{
          padding: "30px 0px",
          justifyContent: "center",
        }}
      >
        {props.data?.map((item: Card) => (
          <GreenTechCard
            key={nanoid()}
            id={item.id}
            title={item.title}
            image_url={item.image_url}
            body={item.body}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default GreenTechList;
