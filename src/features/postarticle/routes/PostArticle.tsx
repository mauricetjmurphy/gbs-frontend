import React from "react";

import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { ContentLayout, MainLayout } from "../../global";
import { PostForm } from "../components/PostForm";

type Props = {};

const PostArticle = (props: Props) => {
  return (
    <MainLayout>
      <ContentLayout title={"User Post Page"} description={""}>
        <PageTitle title={"Post an article"} />
        <PostForm />
      </ContentLayout>
    </MainLayout>
  );
};

export default PostArticle;
