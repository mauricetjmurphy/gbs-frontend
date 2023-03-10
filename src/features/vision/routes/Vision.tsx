import React from "react";

import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { aboutData } from "../../../data/aboutData";
import BackButton from "../../article/components/BackButton";
import { VisionContainer } from "../components/VisionContainer";

interface VisionProps {}

const Vision: React.FC<VisionProps> = (props) => {
  return (
    <MainLayout>
      <ContentLayout title={"About Page"} description={""}>
        <PageTitle title={"Our Vision"} />
        <BackButton />
        <VisionContainer data={aboutData} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Vision;
