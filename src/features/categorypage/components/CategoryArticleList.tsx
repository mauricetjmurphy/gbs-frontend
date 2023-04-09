import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../home/types";
import { ListHeading } from "../../home/components/LatestArticles/ListHeading";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { GreenTechCard } from "../../home/components/GreenTech/GreenTechCard";

interface CategoryArticleListProps {
  data: Card[] | undefined;
  listTitle: string;
}

const CategoryArticleList: React.FC<CategoryArticleListProps> = (props) => {
  const { width } = useWindowSize();

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

export default CategoryArticleList;
