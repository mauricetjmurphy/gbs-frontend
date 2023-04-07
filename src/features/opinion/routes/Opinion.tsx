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
  const { data = [], dataIsLoading, dataIsError } = useContext(ArticleContext);

  if (dataIsLoading) {
    return <Spinner />;
  }

  if (dataIsError) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <p>Failed to fetch data!</p>
      </Box>
    );
  }

  return (
    <MainLayout>
      <ContentLayout title={"User Opinions"} description={""}>
        <PageTitle title={"Opinion"} />
        <BackButton />
        <OpinionList data={data} listTitle={"All Articles"} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Opinion;
