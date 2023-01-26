import { Box, List, ListItem } from "@mui/material";
import * as React from "react";
import { ListImageCard } from "../../../../components/Card/ListImageCard";
import { verticalSectionStyles } from "./verticalSection.styles";
import { nanoid } from "nanoid";
import { Post } from "../../types";

type VerticalCardListProps = {
  data: Post[] | undefined;
};

export const VerticalCardList = ({ data }: VerticalCardListProps) => {
  // if (isLoading) return <h1>"Loading..."</h1>;

  // if (error) return <h1>"An error has occurred"</h1>;

  const cards = data?.slice(0, 2).map((item: Post) => (
    <ListItem key={nanoid()} sx={{ justifyContent: "center" }}>
      <ListImageCard
        id={item.id}
        category={item.category}
        title={item.title}
        author={item.author}
        image_url={item.image_url}
      />
    </ListItem>
  ));

  return (
    <Box sx={verticalSectionStyles.verticalCardListContainer}>
      <List>{cards}</List>
    </Box>
  );
};
