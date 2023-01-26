import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { ContentLayout, MainLayout } from "../../../components";
import { Post } from "../../home/types";
import { ArticleImage } from "../components/ArticleImage";
import { ArticleList } from "../components/ArticleList";
import { Box, Button, Grid } from "@mui/material";

type Props = {};

export const Article = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery<Post[], Error>(
    ["posts"],
    () =>
      fetch("http://localhost:4000/posts").then((response) => response.json()),
    { cacheTime: 1000 * 60 * 120 }
  );

  const article = data?.filter((item: Post) => item.id === id)[0];

  return (
    <MainLayout>
      <ContentLayout title={"Article Page"} description={article?.title}>
        <Box sx={{ height: "130px" }}>
          <Button
            sx={{ marginLeft: "74px" }}
            variant={"outlined"}
            onClick={() => navigate("/")}
          >
            Back to home
          </Button>
        </Box>
        <Grid container sx={{ padding: "50px 50px" }}>
          <Grid item md={2} xs={12}></Grid>
          <Grid item md={8} xs={12}>
            <ArticleImage title={article?.title} image={article?.image_url} />
            <ArticleList article={article} />
          </Grid>
          <Grid item md={2} xs={12}></Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
