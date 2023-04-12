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
import BackButton from "../../../components/BackButton/BackButton";
import { ArticleContext } from "../../../context/ArticleCtx";
import { ArticleAd } from "../../../components/AdSense/ArticleAd";
import { generateRandomIndicies } from "../../../utils/randomIndices";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = (props) => {
  const { id } = useParams();

  const { data = [], dataIsLoading, dataIsError } = useContext(ArticleContext);

  const article = data?.find((item: Card) => item.Id === id);

  const randomIndexNumbers = generateRandomIndicies(6, 253);
  const randomDataItems: any = randomIndexNumbers?.map(
    (index: any) => data && data[index]
  );

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
      <ContentLayout title={article?.Title} description={article?.Body[0]}>
        {/* <ArticleAd /> */}
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
            <BlogCardList
              dataIsLoading={dataIsLoading}
              data={randomDataItems}
              listTitle={"Top Stories"}
            />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};

export default Article;
