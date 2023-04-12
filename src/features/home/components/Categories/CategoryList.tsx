import { FC, useState } from "react";
import { nanoid } from "nanoid";
import { Box, Grid, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import { ListHeading } from "../LatestArticles/ListHeading";
import { CategoryCardSkeleton } from "../../../../components";

import { CategoryCard } from "./CategoryCard";
import { categories } from "./categoryData";

interface CategoryListProps {
  listTitle: string;
  dataIsLoading: boolean;
}

const CategoryList: FC<CategoryListProps> = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 8);
      setFadeKey((prevKey) => prevKey + 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex + 8 < categories.length) {
      setStartIndex(startIndex + 8);
      setFadeKey((prevKey) => prevKey + 1);
    }
  };

  const displayedCategories = categories.slice(startIndex, startIndex + 8);

  return (
    <Box padding={{ xs: "10px", sm: "50px 10px" }}>
      <ListHeading listTitle={props.listTitle} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            sx={{
              height: "70px",
              width: "70px",
              background: "#fff",
              color: "#000000",
              marginBottom: "60px",
            }}
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            <ChevronLeft sx={{ fontSize: "52px" }} />
          </IconButton>
        </Box>

        <Grid
          rowSpacing={{ xs: 2, sm: 3 }}
          columnSpacing={2}
          sx={{ padding: "30px 0px" }}
          container
          direction={"row"}
        >
          {props.dataIsLoading &&
            displayedCategories.map((item: any, index: number) => (
              <Grid key={nanoid()} xs={12} md={3} item>
                <CategoryCardSkeleton />
              </Grid>
            ))}

          {!props.dataIsLoading &&
            displayedCategories.map((item: any, index: number) => (
              <CategoryCard
                key={nanoid()}
                category={item.category}
                image_url={item.image_url}
                path={item.path}
              />
            ))}
        </Grid>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            sx={{
              height: "70px",
              width: "70px",
              background: "#fff",
              fontSize: "52px",
              color: "#000000",
              marginBottom: "60px",
            }}
            onClick={handleNextClick}
            disabled={startIndex + 8 >= categories.length}
          >
            <ChevronRight sx={{ fontSize: "52px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryList;
