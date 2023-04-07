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
import { CategoryCard } from "../components/Categories/CategoryCard";
import CategoryList from "../components/Categories/CategoryList";
import { Card } from "../types";

const GreenTechList = lazy(
  () => import("../components/GreenTech/GreenTechList")
);
const ClimateChangeList = lazy(
  () => import("../components/ClimateChange/ClimateChangeList")
);

export const Home: React.FC = () => {
  const { data, dataIsLoading, dataIsError } =
    useContext<ArticleContextInterface>(ArticleContext);

  if (dataIsLoading) {
    return <Spinner />;
  }

  if (dataIsError) {
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <h1>The site is temporarily down for maintenance</h1>
        <h2>Sorry for the inconvenience</h2>
      </Box>
    );
  }

  const climateData = data?.filter(
    (item: Card) => item.Category === "Climate Change"
  );

  const techData = data?.filter(
    (item: Card) => item.Category === "Green Technology"
  );

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Latest Articles"} />
        <LatestArticles data={data} />
        <Suspense>
          <CategoryList listTitle={"Categories"} />
        </Suspense>
        <Suspense>
          <GreenTechList
            listTitle={"Green Technology"}
            data={techData?.slice(0, 5)}
          />
        </Suspense>
        <Suspense>
          <ClimateChangeList
            listTitle={"Climate Change"}
            data={climateData?.slice(0, 2)}
          />
        </Suspense>
      </ContentLayout>
    </MainLayout>
  );
};
