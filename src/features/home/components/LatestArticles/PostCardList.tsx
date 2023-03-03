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
    <Box padding={{ xs: "10px", sm: "20px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <List
        sx={{ display: "flex", flexDirection: "column", padding: "10px 0px" }}
      >
        {props.data?.map((item) => (
          <PostCard
            key={nanoid()}
            id={item.id}
            title={item.title}
            image_url={item.image_url}
            body={item.body}
            author={item.author}
            date={item.date}
          />
        ))}
      </List>
    </Box>
  );
};
