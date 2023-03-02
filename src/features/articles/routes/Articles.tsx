import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { ContentLayout, MainLayout } from "../../global";
import { AllArticlesList } from "../components/AllArticlesList";
import { Card } from "../../home/types";
import { API_URL } from "../../../config";
import { Spinner } from "../../../components/Spinner/Spinner";
import { PageTitle } from "../../../components/PageTitle/PageTitle";

type ArticlesProps = {};

const Articles: React.FC<ArticlesProps> = (props) => {
  const {
    data: techData,
    isLoading: techArtiiclesIsLoading,
    isError: techIsError,
  } = useQuery<Card[], Error>(
    ["tech-articles"],
    async () =>
      await fetch(`${API_URL}/tech-articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const {
    data: climateData,
    isLoading: climateArtiiclesIsLoading,
    isError: climateIsError,
  } = useQuery<Card[], Error>(
    ["climate-articles"],
    async () =>
      await fetch(`${API_URL}/climate-articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  if (techArtiiclesIsLoading || climateArtiiclesIsLoading) {
    return <Spinner />;
  }

  if (techIsError || climateIsError) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <p>Failed to fetch data!</p>
      </Box>
    );
  }

  const data = [...climateData, ...techData];

  return (
    <MainLayout>
      <ContentLayout title={"All Blog Articles"} description={""}>
        <PageTitle title={"All Articles"} />
        <AllArticlesList data={data} listTitle={"All Articles"} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Articles;
