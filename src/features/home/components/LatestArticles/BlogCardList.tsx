import React from "react";
import { Box, List, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { BlogCard } from "./BlogCard";
import { ListHeading } from "./ListHeading";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle?: string;
}

const BlogCardListContainer = styled(Grid)(({ theme }) => ({
  padding: "10px",

  [theme.breakpoints.up("sm")]: {
    padding: "20px 10px",
  },
}));

export const BlogCardList: React.FC<BlogCardListProps> = (props) => {
  return (
    <BlogCardListContainer>
      {props.listTitle && <ListHeading listTitle={props.listTitle} />}

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 0px",
        }}
      >
        {props.data?.map((item: Card) => (
          <BlogCard
            key={nanoid()}
            id={item.Id}
            title={item.Title}
            image_url={item.Image_url}
            body={item.Body}
          />
        ))}
      </List>
    </BlogCardListContainer>
  );
};
