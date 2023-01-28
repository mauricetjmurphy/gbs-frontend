import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ContentLayout, MainLayout } from "../../../components";
import { API_URL } from "../../../config";
import { VerticalSection } from "../components/VerticalSection/VerticalSection";
import { Post } from "../types";

type Props = {};

export const Home = (props: Props) => {
  const { data } = useQuery<Post[], Error>(["posts"], () =>
    fetch(`${API_URL}/posts`).then((response) => response.json())
  );

  const verticalSection1Data = data?.slice(0, 7);

  const verticalSection2Data = data?.slice(7);

  return (
    <MainLayout>
      <ContentLayout
        title={"Home Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <VerticalSection
          data={verticalSection1Data}
          textListTitle={"MOST READ"}
        />
        <VerticalSection
          data={verticalSection2Data}
          textListTitle={"JUST ADDED"}
          direction="flip"
        />
      </ContentLayout>
    </MainLayout>
  );
};
