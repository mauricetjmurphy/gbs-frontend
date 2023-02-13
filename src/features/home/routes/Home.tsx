import React, { useEffect, useState } from "react";
// import { firstValueFrom, from } from "rxjs";
// import { ajax } from "rxjs/ajax";
import { useQuery } from "@tanstack/react-query";

import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { LatestArticles } from "../components/LatestArticles/LatestArticles";
import { MostPopularArticles } from "../components/MostPopularArticles/MostPopularArticles";
import { Card } from "../types";
import { Spinner } from "../../../components/Spinner/Spinner";

interface S3Image {
  key: string | null;
  imageUrl: string | null;
}

export const Home: React.FC = () => {
  // const [images, setImages] = useState<S3Image[]>([]);

  // useEffect(() => {
  //   const bucketUrl = "https://d1rifiwqqas523.cloudfront.net/01.jpg";

  //   fetch(bucketUrl)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       const parser = new DOMParser();
  //       const xmlDoc = parser.parseFromString(data, "text/xml");

  //       const s3Images = Array.from(
  //         xmlDoc.getElementsByTagName("Contents")
  //       ).map((node) => {
  //         const key = node.getElementsByTagName("Key")[0].textContent;

  //         return {
  //           key,
  //           imageUrl: `${bucketUrl}${key}`,
  //         };
  //       });

  //       setImages(s3Images);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   console.info({ images });
  // }, [images]);

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

  console.info(data);

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
        <MostPopularArticles listTitle={"Green Technology"} data={data} />
      </ContentLayout>
    </MainLayout>
  );
};
