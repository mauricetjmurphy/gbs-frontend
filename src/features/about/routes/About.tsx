import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout, MainLayout } from "../../../components";

type Props = {};

export const About = (props: Props) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContentLayout>
        <Box sx={{ height: "130px" }}>
          <Button
            sx={{ marginLeft: "74px" }}
            variant={"outlined"}
            onClick={() => navigate("/")}
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
              Welcome to InTheKnow, a blog site powered by GPT-3 where you can
              find the latest and most popular information on a variety of
              topics. Our mission is to keep you informed and up-to-date on the
              things that matter most to you.
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              Our team of expert writers, editors, and researchers use GPT-3 to
              produce high-quality content that is accurate, informative, and
              engaging. We cover a wide range of topics, including technology,
              science, business, health, entertainment, and more.
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              We understand that everyone has different interests and that's why
              we strive to provide a diverse range of content for our readers.
              Whether you're looking for the latest news, in-depth analysis, or
              just want to stay informed, InTheKnow has something for you.
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              Our site is updated daily with new content, so be sure to check
              back regularly to see what's new. And if there's a topic you're
              interested in that you don't see covered on our site, please let
              us know and we'll do our best to include it in our content.
            </Typography>
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="body1"
              component={"p"}
              gutterBottom
            >
              Thank you for visiting InTheKnow. We hope you enjoy reading our
              content as much as we enjoy creating it.
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
