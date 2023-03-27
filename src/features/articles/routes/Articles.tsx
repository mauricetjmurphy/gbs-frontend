import { useContext } from "react";
import { Box } from "@mui/material";

import { ContentLayout, MainLayout } from "../../global";
import { AllArticlesList } from "../components/AllArticlesList";
import { Spinner } from "../../../components/Spinner/Spinner";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ArticleContext } from "../../../context/ArticleCtx";

type ArticlesProps = {};

const Articles: React.FC<ArticlesProps> = (props) => {
  const {
    techData = [],
    techIsLoading,
    techIsError,
    climateData = [],
    climateIsLoading,
    climateIsError,
  } = useContext(ArticleContext);

  if (techIsLoading || climateIsLoading) {
    return <Spinner />;
  }

  if (techIsError || climateIsError) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <p>Failed to fetch data!</p>
      </Box>
    );
  }

  const data = [...climateData, ...techData];

  return (
    <MainLayout>
      <ContentLayout title={"All Blog Articles"} description={""}>
        <PageTitle title={"All Articles"} />
        <AllArticlesList data={data} listTitle={"All Articles"} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Articles;
