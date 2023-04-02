import { useContext } from "react";
import { Box } from "@mui/material";

import { ContentLayout, MainLayout } from "../../global";
import { OpinionList } from "../components/OpinionList";
import { Spinner } from "../../../components/Spinner/Spinner";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ArticleContext } from "../../../context/ArticleCtx";
import BackButton from "../../../components/BackButton/BackButton";

type OpinionProps = {};

const Opinion: React.FC<OpinionProps> = (props) => {
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

  const sortedData = data?.sort((a: any, b: any) =>
    a.image_url > b.image_url ? 1 : -1
  );

  return (
    <MainLayout>
      <ContentLayout title={"User Opinions"} description={""}>
        <PageTitle title={"Opinion"} />
        <BackButton />
        <OpinionList data={sortedData} listTitle={"All Articles"} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Opinion;
