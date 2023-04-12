import React from "react";
import { List, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";

import { Card } from "../../types";
import { BlogCardSkelton } from "../../../../components";

import { BlogCard } from "./BlogCard";
import { ListHeading } from "./ListHeading";

interface BlogCardListProps {
  data: Card[] | undefined;
  listTitle?: string;
  dataIsLoading: boolean;
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
        {props.dataIsLoading &&
          [1, 2, 3].map((i) => <BlogCardSkelton key={nanoid()} />)}

        {!props.dataIsLoading &&
          props.data?.map((item: Card) => (
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
