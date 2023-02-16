import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ContentLayout, MainLayout } from "../../../components";
import UnderConstruction from "../../../components/UnderConstruction/UnderConstruction";
import { aboutContent } from "../../../data/about";

interface Props {}

export const About = (props: Props) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContentLayout title={"About Page"} description={""}>
        <UnderConstruction />
      </ContentLayout>
    </MainLayout>
  );
};
