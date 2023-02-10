import React from "react";
import { Box, List } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { BlogCard } from "./BlogCard";
import { ListHeading } from "./ListHeading";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle: string;
}

export const BlogCardList: React.FC<BlogCardListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box sx={{ padding: width > 600 ? "0 10px" : "0px" }}>
      <ListHeading listTitle={props.listTitle} />
      <List
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.data?.map((item: Card) => (
          <BlogCard
            key={nanoid()}
            Id={item.Id}
            Title={item.Title}
            Image_url={item.Image_url}
            Body={item.Body}
          />
        ))}
      </List>
    </Box>
  );
};
