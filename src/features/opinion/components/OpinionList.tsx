import React from "react";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { Card } from "../../home/types";

import { OpinionCard } from "./OpinionCard";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle: string;
}

export const OpinionList: React.FC<BlogCardListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={3}
      sx={{ background: "#fff", padding: "20px", margin: "0px" }}
    >
      {props.data?.map((item: Card) => (
        <OpinionCard
          key={nanoid()}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
          body={item.body}
          author={item.author}
          date={item.date}
        />
      ))}
    </Grid>
  );
};
