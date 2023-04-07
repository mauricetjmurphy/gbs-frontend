import React from "react";
import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";

import { ListHeading } from "../LatestArticles/ListHeading";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import { CategoryCard } from "./CategoryCard";
import { categories } from "./categoryData";

interface CategoryListProps {
  listTitle: string;
}

const CategoryList: React.FC<CategoryListProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Box padding={{ xs: "10px", sm: "50px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Grid
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={2}
        sx={{ padding: "30px 0px" }}
        container
        direction={"row"}
      >
        {categories.map((item: any) => (
          <CategoryCard
            key={nanoid()}
            category={item.category}
            image_url={item.image_url}
            path={item.path}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryList;
