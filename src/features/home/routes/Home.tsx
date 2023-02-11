import React from "react";
// import { firstValueFrom, from } from "rxjs";
// import { ajax } from "rxjs/ajax";
import { useQuery } from "@tanstack/react-query";

import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
import { MostPopularArticles } from "../components/MostPopularArticles/MostPopularArticles";
import { Card } from "../types";

export const Home: React.FC = () => {
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

  if (isLoading) {
    return <p>Loading...</p>;
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
        <MostPopularArticles listTitle={"Green Technology"} data={data} />
      </ContentLayout>
    </MainLayout>
  );
};
