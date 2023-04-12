import React from "react";
import { Box, List } from "@mui/material";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { PostCardSkeleton } from "../../../../components";

import { PostCard } from "./PostCard";
import { ListHeading } from "./ListHeading";

interface PostCardListProps {
  data: Card[] | undefined;
  listTitle: string;
  dataIsLoading: boolean;
}

export const PostCardList: React.FC<PostCardListProps> = (props) => {
  return (
    <Box padding={{ xs: "10px", sm: "20px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <List
        sx={{ display: "flex", flexDirection: "column", padding: "10px 0px" }}
      >
        {props.dataIsLoading &&
          [1, 2, 3, 4, 5].map((i) => <PostCardSkeleton key={nanoid()} />)}

        {!props.dataIsLoading &&
          props.data &&
          props.data?.map((item) => (
            <PostCard
              key={nanoid()}
              id={item.Id}
              title={item.Title}
              image_url={item.Image_url}
              body={item.Body}
              author={item.Author}
              date={item.Date}
            />
          ))}
      </List>
    </Box>
  );
};
