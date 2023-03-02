import React, { useEffect, useState, Suspense, lazy } from "react";
// import { firstValueFrom, from } from "rxjs";
// import { ajax } from "rxjs/ajax";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
// import { GreenTechList } from "../components/GreenTech/GreenTechList";
import { Card } from "../types";
import { Spinner } from "../../../components/Spinner/Spinner";
import { ContentLayout, MainLayout } from "../../global";
// import { ClimateChangeList } from "../components/ClimateChange/ClimateChangeList";

const GreenTechList = lazy(
  () => import("../components/GreenTech/GreenTechList")
);
const ClimateChangeList = lazy(
  () => import("../components/ClimateChange/ClimateChangeList")
);

export const Home: React.FC = () => {
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

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Latest Articles"} />
        <LatestArticles climateData={climateData} techData={techData} />
        <Suspense>
          <GreenTechList
            listTitle={"Green Technology"}
            data={techData.slice(6, 10)}
          />
        </Suspense>
        <Suspense>
          <ClimateChangeList
            listTitle={"Climate Change"}
            data={climateData.slice(10, 12)}
          />
        </Suspense>
      </ContentLayout>
    </MainLayout>
  );
};
