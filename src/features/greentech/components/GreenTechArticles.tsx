import { useContext } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { HeadlineCard } from "../../home/components/LatestArticles/HeadlineCard";
import { BlogCardList } from "../../home/components/LatestArticles/BlogCardList";
import { Card } from "../../home/types";

interface ClimateChangeArticlesProps {
  data: Card[];
}

const GreenTechArticlesContainer = styled(Grid)(({ theme }) => ({
  background: "#fff",
  [theme.breakpoints.up("md")]: {
    padding: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "40px",
  },
}));

const GreenTechArticles: React.FC<ClimateChangeArticlesProps> = (props) => {
  return (
    <GreenTechArticlesContainer container>
      <Grid item md={6} xs={12}>
        {props.data && (
          <HeadlineCard
            id={props.data[0]?.Id}
            title={props.data[0]?.Title}
            image_url={props.data[0]?.Image_url}
            body={props.data[0]?.Body}
            date={props.data[0]?.Date}
          />
        )}
      </Grid>
      <Grid item sm={3} xs={6}>
        <BlogCardList data={props.data?.slice(1, 3)} />
      </Grid>
      <Grid item sm={3} xs={6}>
        <BlogCardList data={props.data?.slice(3, 5)} />
      </Grid>
    </GreenTechArticlesContainer>
  );
};

export default GreenTechArticles;
