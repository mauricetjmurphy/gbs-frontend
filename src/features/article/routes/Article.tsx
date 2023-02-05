import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Grid } from "@mui/material";

import { ContentLayout, MainLayout } from "../../../components";
import { type Post } from "../../home/types";
import { ArticleImage } from "../components/ArticleImage";
import { ArticleList } from "../components/ArticleList";
import { ImageCardList } from "../../../components/Card/ImageCardList";
import { PageTitle } from "../../../components/PageTitle/PageTitle";

interface Props {}

export const Article = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery<Post[], Error>(
    ["posts"],
    async () =>
      await fetch("http://localhost:4000/posts").then(
        async (response) => await response.json()
      ),
    { cacheTime: 1000 * 60 * 120 }
  );

  const article = data?.filter((item: Post) => item.id === id)[0];
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
            sx={{ background: "#fff", padding: "50px" }}
          >
            <ArticleImage title={article?.title} image={article?.image_url} />
            <ArticleList article={article} />
          </Grid>
          <Grid item md={4} xs={12} sx={{ padding: "0px 50px" }}>
            <ImageCardList
              direction="vertical"
              data={ImageCardListData}
              sectionTitle={"Top Stories"}
            />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
