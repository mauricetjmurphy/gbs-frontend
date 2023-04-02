import { useContext } from "react";
import { useParams } from "react-router";
import { Box, Grid } from "@mui/material";

import { ContentLayout, MainLayout } from "../../../components";
import { Card } from "../../home/types";
import { ArticleTitle } from "../components/ArticleTitle";
import { ArticleImage } from "../components/ArticleImage";
import { ArticleParagraphList } from "../components/ArticleParagraphList";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { BlogCardList } from "../../home/components/LatestArticles/BlogCardList";
import { Spinner } from "../../../components/Spinner/Spinner";
import BackButton from "../components/BackButton";
import { ArticleContext } from "../../../context/ArticleCtx";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = (props) => {
  const { id } = useParams();

  const {
    techData = [],
    techIsLoading,
    techIsError,
    climateData = [],
    climateIsLoading,
    climateIsError,
  } = useContext(ArticleContext);

  const data = [...climateData, ...techData];

  const article = data?.find((item: Card) => item.Id === id);
  const ImageCardListData = data?.slice(0, 5).filter((item) => item.Id !== id);

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

  return (
    <MainLayout>
      <ContentLayout title={article?.Title} description={article?.Body[0]}>
        <PageTitle title={article?.Category} />
        <BackButton />
        <Grid
          container
          sx={{
            paddingBottom: "50px",
          }}
        >
          <Grid
            item
            padding={{ xs: "20px 10px", sm: "50px" }}
            md={8}
            xs={12}
            sx={{
              background: "#fff",
              marginBottom: "40px",
            }}
          >
            <ArticleTitle title={article?.Title} />
            <ArticleImage
              title={article?.Title}
              image_url={article?.Image_url}
            />
            <ArticleParagraphList article={article} />
          </Grid>
          <Grid item md={4} xs={12} padding={{ xs: "0px", sm: "0px 50px" }}>
            <BlogCardList data={ImageCardListData} listTitle={"Top Stories"} />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};

export default Article;
