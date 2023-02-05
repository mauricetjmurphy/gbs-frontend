import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { API_URL } from "../../../config";
import { HorizontalSection } from "../components/HorizontalSection/HorizontalSection";
import VerticalSection from "../components/VerticalSection/VerticalSection";
import { Post } from "../types";

type Props = {};

export const Home = (props: Props) => {
  const { data } = useQuery<Post[], Error>(["posts"], () =>
    fetch(`${API_URL}/posts`).then((response) => response.json())
  );

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
