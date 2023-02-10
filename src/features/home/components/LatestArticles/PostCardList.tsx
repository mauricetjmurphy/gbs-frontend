import React from "react";
import { Box, List } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { PostCard } from "./PostCard";
import { ListHeading } from "./ListHeading";

interface PostCardListProps {
  data: Card[] | undefined;
  listTitle: string;
}

export const PostCardList: React.FC<PostCardListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box sx={{ padding: width > 600 ? "0 10px" : "20px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <List disablePadding sx={{ display: "flex", flexDirection: "column" }}>
        {props.data?.slice(4, 6).map((item) => (
          <PostCard
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
