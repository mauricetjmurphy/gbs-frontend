import { useContext } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { Card } from "../../types";
import { ArticleContext } from "../../../../context/ArticleCtx";

import { BlogCardList } from "./BlogCardList";
import { PostCardList } from "./PostCardList";
import { HeadlineCard } from "./HeadlineCard";

interface LatestArticlesProps {
  techData: Card[] | undefined;
  climateData: Card[] | undefined;
}

const LatestArticlesContainer = styled(Grid)(({ theme }) => ({
  background: "#fff",
  [theme.breakpoints.up("md")]: {
    padding: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "40px",
  },
}));

export const LatestArticles: React.FC<LatestArticlesProps> = (props) => {
  const { width } = useWindowSize();

  const { techData = [], climateData = [] } = useContext(ArticleContext);

  const data = [...climateData, ...techData];

  console.log({ data });

  return (
    <LatestArticlesContainer container>
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList data={data?.slice(0, 2)} listTitle={"Top Stories"} />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {data && (
          <HeadlineCard
            id={data[2]?.Id}
            title={data[2]?.Title}
            image_url={data[2]?.Image_url}
            body={data[2]?.Body}
            date={data[2]?.Date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={data?.slice(3, 6)} listTitle={"Opinion"} />
      </Grid>
    </LatestArticlesContainer>
  );
};
