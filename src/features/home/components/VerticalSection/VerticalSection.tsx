import { Divider, Grid } from "@mui/material";
import React from "react";
import { Post } from "../../types";
import { VerticalCard } from "./VerticalCard";
import { VerticalCardList } from "./VerticalCardList";
import { verticalSectionStyles } from "./verticalSection.styles";
import { VerticalTitledList } from "./VerticalTitledList";

type VerticalSectionProps = {
  direction?: "flip";
  textListTitle: string;
  data: Post[] | undefined;
};

export const VerticalSection = ({
  direction,
  textListTitle,
  data,
}: VerticalSectionProps) => {
  return (
    <Grid
      container
      sx={verticalSectionStyles.verticalSectionContainer}
      direction={direction === "flip" ? "row-reverse" : "row"}
      spacing={4}
    >
      <Grid item md={3} xs={12}>
        <VerticalCardList data={data} />
      </Grid>
      <Grid item md={6} xs={12}>
        <VerticalCard data={data} />
      </Grid>
      <Grid item md={3} xs={12}>
        <VerticalTitledList data={data} title={textListTitle} />
      </Grid>
      <Divider style={{ width: "100%", paddingTop: "50px" }} />
    </Grid>
  );
};
