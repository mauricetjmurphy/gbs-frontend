import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ContentLayout, MainLayout } from "../../../components";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { aboutData } from "../../../data/aboutData";
import BackButton from "../../article/components/BackButton";
import { VisionContainer } from "../components/VisionContainer";

interface Props {}

export const Vision = (props: Props) => {
  const navigate = useNavigate();
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
