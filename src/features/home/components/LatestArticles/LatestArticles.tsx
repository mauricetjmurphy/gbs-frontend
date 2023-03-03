import { useContext } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { Card } from "../../types";
import { ArticleContext } from "../../../../state/ArticleCtx";

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

  return (
    <LatestArticlesContainer container>
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList data={data?.slice(0, 2)} listTitle={"Top Stories"} />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {data && (
          <HeadlineCard
            id={data[2]?.id}
            title={data[2]?.title}
            image_url={data[2]?.image_url}
            body={data[2]?.body}
            date={data[2]?.date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={data?.slice(3, 6)} listTitle={"Opinion"} />
      </Grid>
    </LatestArticlesContainer>
  );
};
