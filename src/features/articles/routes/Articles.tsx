import { useContext, useState } from "react";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { ContentLayout, MainLayout } from "../../global";
import { AllArticlesList } from "../components/AllArticlesList";
import { Spinner } from "../../../components/Spinner/Spinner";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import {
  ArticleContext,
  ArticleContextInterface,
} from "../../../context/ArticleCtx";
import { Card } from "../../home/types";

type ArticlesProps = {};

const Articles: React.FC<ArticlesProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const {
    techData = [],
    techIsLoading,
    techIsError,
    climateData = [],
    climateIsLoading,
    climateIsError,
  } = useContext<ArticleContextInterface>(ArticleContext);

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
        <AllArticlesList
          data={data}
          listTitle={"All Articles"}
          currentPage={currentPage}
          perPage={perPage}
        />
        <Box
          sx={{ padding: "30px 0", display: "flex", justifyContent: "center" }}
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(data.length / perPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </ContentLayout>
    </MainLayout>
  );
};

export default Articles;
