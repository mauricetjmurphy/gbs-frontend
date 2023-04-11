import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
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
import BackButton from "../../../components/BackButton/BackButton";
import { DisplayAd } from "../../../components/AdSense/DisplayAd";

interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  console.log(location);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
  };

  useEffect(() => {
    location.state?.category === undefined ? navigate("/") : null;
  }, []);

  const {
    data = [],
    dataIsLoading,
    dataIsError,
  } = useContext<ArticleContextInterface>(ArticleContext);

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

  const filteredData = data?.filter((item: Card) => {
    if (location.state?.category === "All Articles") {
      return true;
    } else {
      return item.Category === location.state?.category;
    }
  });

  return (
    <MainLayout>
      <ContentLayout
        title={"All Blog Articles"}
        description={"The is a list of all the websites articles"}
      >
        {/* <DisplayAd /> */}
        <PageTitle title={location.state?.category} />
        <BackButton />
        <AllArticlesList
          data={filteredData}
          listTitle={"All Articles"}
          currentPage={currentPage}
          perPage={perPage}
        />
        <Box
          sx={{ padding: "30px 0", display: "flex", justifyContent: "center" }}
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(filteredData.length / perPage)}
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
