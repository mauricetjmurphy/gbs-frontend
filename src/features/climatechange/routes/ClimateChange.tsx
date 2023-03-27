import React, { useContext } from "react";

import { ArticleContext } from "../../../context/ArticleCtx";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ContentLayout, MainLayout } from "../../global";
import ClimateChangeList from "../../home/components/ClimateChange/ClimateChangeList";
import ClimateChangeArticles from "../components/ClimateChangeArticles";

interface ClimateChangeProps {}

const ClimateChange = (props: ClimateChangeProps) => {
  const { climateData = [] } = useContext(ArticleContext);

  const data = [...climateData];

  return (
    <MainLayout>
      <ContentLayout
        title={"Climate Change Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Climate Change"} />

        <ClimateChangeArticles data={data} />
        <ClimateChangeList listTitle={"Top Stories"} data={data?.slice(5, 9)} />
      </ContentLayout>
    </MainLayout>
  );
};

export default ClimateChange;
