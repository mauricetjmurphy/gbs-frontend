import { FC, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { ListHeading } from "../LatestArticles/ListHeading";
import { Card } from "../../types";
import { HeadlineSkeleton } from "../../../../components";
import { generateRandomIndicies } from "../../../../utils/randomIndices";

import { ClimateChangeCard } from "./ClimateChangeCard";

interface ClimateChangeListProps {
  listTitle: string;
  data: Card[] | undefined;
  dataIsLoading: boolean;
}

const ClimateChangeList: FC<ClimateChangeListProps> = (props) => {
  const [randomItems, setRandomItems] = useState<Card[]>([]);

  useEffect(() => {
    const randomClimateNumbers = generateRandomIndicies(2, 14);
    const randomClimateItems = randomClimateNumbers
      .map((index: any) => props.data?.[index])
      .filter(Boolean) as Card[];

    setRandomItems(randomClimateItems);
  }, [props.data]);

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
        {props.dataIsLoading &&
          [1, 2].map((i) => (
            <Grid key={nanoid()} sx={{}} xs={12} md={6} item>
              <HeadlineSkeleton />
            </Grid>
          ))}

        {randomItems.map((item: any) => (
          <ClimateChangeCard
            key={item.Id}
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
