import { useEffect, useState, useContext, Suspense, lazy } from "react";
// import { firstValueFrom, from } from "rxjs";
// import { ajax } from "rxjs/ajax";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
import { Spinner } from "../../../components/Spinner/Spinner";
import { ContentLayout, MainLayout } from "../../global";
import {
  ArticleContextInterface,
  ArticleContext,
} from "../../../context/ArticleCtx";

const GreenTechList = lazy(
  () => import("../components/GreenTech/GreenTechList")
);
const ClimateChangeList = lazy(
  () => import("../components/ClimateChange/ClimateChangeList")
);

export const Home: React.FC = () => {
  const {
    techData,
    techIsLoading,
    techIsError,
    climateData,
    climateIsLoading,
    climateIsError,
  } = useContext<ArticleContextInterface>(ArticleContext);

  console.log({ techData });
  console.log({ climateData });

  if (techIsLoading || climateIsLoading) {
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
            data={techData?.slice(6, 10)}
          />
        </Suspense>
        <Suspense>
          <ClimateChangeList
            listTitle={"Climate Change"}
            data={climateData?.slice(9, 11)}
          />
        </Suspense>
      </ContentLayout>
    </MainLayout>
  );
};
