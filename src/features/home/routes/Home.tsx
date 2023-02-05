import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { HorizontalSection } from "../components/HorizontalSection/HorizontalSection";
import { VerticalSection } from "../components/VerticalSection/VerticalSection";
import { type Post } from "../types";

export const Home: React.FC = () => {
  const { data } = useQuery<Post[], Error>(
    ["posts"],
    async () =>
      await fetch(`${API_URL}/posts`).then(
        async (response) => await response.json()
      )
  );

  console.log(data);

  const verticalSectionData = data;

  const horizontalSection = data?.slice(0, 5);

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Climate News"} />
        <VerticalSection data={verticalSectionData} />
        <HorizontalSection title="Top Stories" data={horizontalSection} />
      </ContentLayout>
    </MainLayout>
  );
};
