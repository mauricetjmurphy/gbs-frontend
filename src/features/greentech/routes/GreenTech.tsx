import React, { useContext } from "react";

import { ArticleContext } from "../../../context/ArticleCtx";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ContentLayout, MainLayout } from "../../global";
import GreenTechList from "../../home/components/GreenTech/GreenTechList";
import GreenTechArticles from "../components/GreenTechArticles";

interface GreenTechProps {}

const GreenTech = (props: GreenTechProps) => {
  const { techData = [] } = useContext(ArticleContext);

  const data = [...techData];

  return (
    <MainLayout>
      <ContentLayout
        title={"Green Technology Page"}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={"Green Technology"} />
        <GreenTechArticles data={data} />
        <GreenTechList listTitle={"Top Stories"} data={data?.slice(5, 9)} />
      </ContentLayout>
    </MainLayout>
  );
};

export default GreenTech;
