import * as React from "react";
import { useQuery } from "@tanstack/react-query";
// import { firstValueFrom, from, Observable } from "rxjs";
// import { ajax, AjaxResponse } from "rxjs/ajax";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Grid } from "@mui/material";

import { ContentLayout, MainLayout } from "../../../components";
import { Card } from "../../home/types";
import { ArticleTitle } from "../components/ArticleTitle";
import { ArticleImage } from "../components/ArticleImage";
import { ArticleParagraphList } from "../components/ArticleParagraphList";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { BlogCardList } from "../../home/components/LatestArticles/BlogCardList";
import { API_URL } from "../../../config";
import { Spinner } from "../../../components/Spinner/Spinner";
import BackButton from "../components/BackButton";

interface ArticleProps {}

export const Article: React.FC<ArticleProps> = (props) => {
  const { id } = useParams();
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery<Card[], Error>(
    ["articles"],
    async () =>
      await fetch(`${API_URL}/articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const article = data?.find((item: Card) => item.Id === id);
  const ImageCardListData = data?.slice(0, 5);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <MainLayout>
      <ContentLayout
        title={article?.Title}
        description={article?.Body[0].text[0]}
      >
        <PageTitle title={article?.Category} />
        <BackButton />
        <Grid
          container
          sx={{
            paddingBottom: "50px",
          }}
        >
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              background: "#fff",
              padding: width > 600 ? "50px" : "20px 10px",
              marginBottom: "40px",
            }}
          >
            <ArticleTitle title={article?.Title} />
            <ArticleImage title={article?.Title} image={article?.Image_url} />
            <ArticleParagraphList article={article} />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              padding: width > 600 ? "0px 50px" : "0px",
            }}
          >
            <BlogCardList data={ImageCardListData} listTitle={"Top Stories"} />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
