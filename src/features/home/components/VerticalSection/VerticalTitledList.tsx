import { Box, List, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";
import { TextCard } from "../../../../components/Card/TextCard";
import { Post } from "../../types";
import { verticalSectionStyles } from "./verticalSection.styles";

type VerticalTitledListProps = {
  title: string;
  data: Post[] | undefined;
};

export const VerticalTitledList = ({
  title,
  data,
}: VerticalTitledListProps) => {
  // if (isLoading) return <h1>"Loading..."</h1>;

  // if (error) return <h1>"An error has occurred"</h1>;

  const cards =
    data &&
    data
      .slice(3)
      .map((item: any, index: number) => (
        <TextCard
          id={item.id}
          title={item.title}
          category={item.category}
          index={index}
          key={nanoid()}
        />
      ));

  return (
    <Box sx={verticalSectionStyles.verticalTitledListContainer}>
      <Box>
        <Typography
          variant="h4"
          component={"h1"}
          sx={{ paddingLeft: "32px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography sx={{ paddingLeft: "32px" }}>
          For{" "}
          {new Date().toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </Box>

      <List>{cards}</List>
    </Box>
  );
};
