import React, { useEffect, useState } from "react";
// import { firstValueFrom, from } from "rxjs";
// import { ajax } from "rxjs/ajax";
import { useQuery } from "@tanstack/react-query";

import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
import { GreenTechList } from "../components/GreenTech/GreenTechList";
import { Card } from "../types";
import { Spinner } from "../../../components/Spinner/Spinner";
import { ContentLayout, MainLayout } from "../../global";
import { ClimateChangeList } from "../components/ClimateChange/ClimateChangeList";

interface S3Image {
  key: string | null;
  imageUrl: string | null;
}

export const Home: React.FC = () => {
  const {
    data,
    isLoading: artiiclesIsLoading,
    isError,
  } = useQuery<Card[], Error>(
    ["articles"],
    async () =>
      await fetch(`${API_URL}/articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  if (artiiclesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Climate News"} />
        <LatestArticles data={data} />
        <GreenTechList listTitle={"Green Technology"} data={data} />
        <ClimateChangeList listTitle={"Climate Change"} data={data} />
      </ContentLayout>
    </MainLayout>
  );
};
