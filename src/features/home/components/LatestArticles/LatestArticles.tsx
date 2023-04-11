import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Card } from "../../types";
import HeadlineSkeleton from "../../../../components/Skeletons/HeadlineSkeleton";

import { BlogCardList } from "./BlogCardList";
import { PostCardList } from "./PostCardList";
import { HeadlineCard } from "./HeadlineCard";

interface LatestArticlesProps {
  data: Card[] | undefined;
  dataIsLoading: boolean;
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
  return (
    <LatestArticlesContainer container>
      <Grid md={3} xs={12} item sx={{}}>
        <BlogCardList
          data={props.data?.slice(0, 2)}
          listTitle={"Top Stories"}
          dataIsLoading={props.dataIsLoading}
        />
      </Grid>
      <Grid md={6} xs={12} item sx={{}}>
        {!props.dataIsLoading && props.data ? (
          <HeadlineCard
            id={props.data[2]?.Id}
            title={props.data[2]?.Title}
            image_url={props.data[2]?.Image_url}
            body={props.data[2]?.Body}
            date={props.data[2]?.Date}
          />
        ) : (
          <HeadlineSkeleton />
        )}
      </Grid>
      <Grid md={3} xs={12} item sx={{}}>
        <PostCardList
          dataIsLoading={props.dataIsLoading}
          data={props.data?.slice(3, 6)}
          listTitle={"Opinion"}
        />
      </Grid>
    </LatestArticlesContainer>
  );
};
