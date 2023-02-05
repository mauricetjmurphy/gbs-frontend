import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ContentLayout, MainLayout } from "../../../components";
import { aboutContent } from "../../../data/about";

interface Props {}

export const About = (props: Props) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContentLayout
        title={"About Page"}
        description={aboutContent.metaDescription}
      >
        <Box sx={{ height: "130px" }}>
          <Button
            sx={{ marginLeft: "74px" }}
            variant={"outlined"}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
        </Box>
        <Grid sx={{ width: "100vw", height: "100%" }} container>
          <Grid sx={{ padding: "100px" }} item xs={12} md={6}>
            <Typography variant="h3" component={"h1"} gutterBottom>
              About
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              {aboutContent.para1}
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              {aboutContent.para2}
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              {aboutContent.para3}
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              {aboutContent.para4}
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              {aboutContent.para5}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={
                "https://static.timesofisrael.com/www/uploads/2019/12/iStock-1029035836-e1575983057612.jpg"
              }
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt=""
            />
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
