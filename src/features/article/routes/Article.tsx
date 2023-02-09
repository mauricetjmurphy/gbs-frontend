import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Grid } from "@mui/material";

import { ContentLayout, MainLayout } from "../../../components";
import { Card } from "../../home/types";
import { ArticleImage } from "../components/ArticleImage";
import { ArticleList } from "../components/ArticleList";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { BlogCardList } from "../../home/components/LatestArticles/BlogCardList";

interface Props {}

export const Article = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const { data } = useQuery<Card[], Error>(
    ["posts"],
    async () =>
      await fetch("http://localhost:4000/posts").then(
        async (response) => await response.json()
      ),
    { cacheTime: 1000 * 60 * 120 }
  );

  const article = data?.filter((item: Card) => item.id === id)[0];
  const ImageCardListData = data?.slice(0, 5);

  return (
    <MainLayout>
      <ContentLayout title={"Article Page"} description={article?.title}>
        <PageTitle title={article?.category} />
        <Box sx={{ height: "60px", display: "flex", alignItems: "center" }}>
          <Button
            variant={"outlined"}
            onClick={() => {
              navigate("/");
            }}
            size={"small"}
            color={"inherit"}
          >
            Back to home
          </Button>
        </Box>
        <Grid container sx={{ padding: "20px 0 50px 0" }}>
          <Grid
            item
            md={8}
            xs={12}
            sx={{ background: "#fff", padding: width > 600 ? "50px" : "20px" }}
          >
            <ArticleImage title={article?.title} image={article?.image_url} />
            <ArticleList article={article} />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ padding: width > 600 ? "0px 50px" : "0px" }}
          >
            <BlogCardList data={ImageCardListData} listTitle={"Top Stories"} />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
