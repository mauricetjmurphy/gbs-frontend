import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { ListHeading } from "../LatestArticles/ListHeading";
import BlogCardSkelton from "../../../../components/Skeletons/BlogCardSkelton";

import { GreenTechCard } from "./GreenTechCard";

interface MostPopularArticlesProps {
  data: Card[] | undefined;
  listTitle: string;
  dataIsLoading: boolean;
}

const GreenTechList: React.FC<MostPopularArticlesProps> = (props) => {
  return (
    <Box padding={{ xs: "10px", sm: "50px 10px 50px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={2}
        container
        flexWrap={{ sm: "wrap", md: "nowrap" }}
        sx={{
          padding: "30px 0px",
          justifyContent: "center",
        }}
      >
        {props.dataIsLoading &&
          [1, 2, 3, 4, 5].map((i) => (
            <Grid item md={3} xs={12}>
              <BlogCardSkelton />
            </Grid>
          ))}

        {props.data?.map((item: Card) => (
          <GreenTechCard
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

export default GreenTechList;
