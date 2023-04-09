import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

import { ArticleContext } from "../../../context/ArticleCtx";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ContentLayout, MainLayout } from "../../global";
import BackButton from "../../../components/BackButton/BackButton";
import { Card } from "../../home/types";
import CategoryArticlesSection from "../components/CategoryArticlesSection";
import CategoryArticleList from "../components/CategoryArticleList";

interface CategoryArticlesProps {}

const CategoryArticles = (props: CategoryArticlesProps) => {
  const location = useLocation();
  const { data = [] } = useContext(ArticleContext);
  const [category, setCategory] = useState(location.state?.category);

  useEffect(() => {
    setCategory(location.state?.category);
  }, [location.state]);

  const filteredData = data?.filter((item: Card) => item.Category === category);

  return (
    <MainLayout>
      <ContentLayout
        title={location.state.category}
        description={
          "Here we share interesting insights and perspectives on the latest news and trends in popular topics."
        }
      >
        <PageTitle title={location.state.category} />
        <BackButton />
        <CategoryArticlesSection data={filteredData} />
        <CategoryArticleList
          listTitle={"Top Stories"}
          data={data?.slice(5, 9)}
        />
      </ContentLayout>
    </MainLayout>
  );
};

export default CategoryArticles;
