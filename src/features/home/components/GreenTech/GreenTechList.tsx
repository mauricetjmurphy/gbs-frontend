import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { ListHeading } from "../LatestArticles/ListHeading";
import BlogCardSkelton from "../../../../components/Skeletons/BlogCardSkelton";
import { generateRandomIndicies } from "../../../../utils/randomIndices";

import { GreenTechCard } from "./GreenTechCard";

interface MostPopularArticlesProps {
  data: Card[] | undefined;
  listTitle: string;
  dataIsLoading: boolean;
}

const GreenTechList: React.FC<MostPopularArticlesProps> = (props) => {
  const [randomItems, setRandomItems] = useState<Card[]>([]);

  useEffect(() => {
    const randomTechNumbers = generateRandomIndicies(5, 14);
    const randomTechItems = randomTechNumbers
      .map((index: any) => props.data?.[index])
      .filter(Boolean) as Card[];

    setRandomItems(randomTechItems);
  }, [props.data]);

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
            <Grid key={nanoid()} item md={3} xs={12}>
              <BlogCardSkelton />
            </Grid>
          ))}

        {randomItems.map((item) => (
          <GreenTechCard
            key={item.Id}
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
