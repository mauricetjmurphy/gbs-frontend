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
  data: Card[] | undefined;
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

  return (
    <LatestArticlesContainer container>
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList
          data={props.data?.slice(0, 2)}
          listTitle={"Top Stories"}
        />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {props.data && (
          <HeadlineCard
            id={props.data[2]?.Id}
            title={props.data[2]?.Title}
            image_url={props.data[2]?.Image_url}
            body={props.data[2]?.Body}
            date={props.data[2]?.Date}
          />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList data={props.data?.slice(3, 6)} listTitle={"Opinion"} />
      </Grid>
    </LatestArticlesContainer>
  );
};
