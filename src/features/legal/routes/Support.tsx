import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { ContentLayout, MainLayout } from "../../../components";
import UnderConstruction from "../../../components/UnderConstruction/UnderConstruction";
import ContactForm from "../components/ContactForm";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SocialLinks } from "../../../components/SocialMedia/SocialLinks";

interface SupportProps {}

export const Support: React.FC<SupportProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <MainLayout>
      <ContentLayout title={"Support Page"} description={""}>
        <Grid
          container
          sx={{
            background: "#fff",
            padding: width < 600 ? "20px" : "50px",
            margin: "50px 0px",
          }}
        >
          <Grid
            sx={{ padding: width < 600 ? "10px" : "30px" }}
            item
            xs={12}
            md={6}
          >
            <Typography variant="h1" component="h1">
              Contact Us
            </Typography>
            <ContactForm />
          </Grid>
          <Grid
            sx={{ padding: width < 600 ? "10px" : "30px" }}
            item
            xs={12}
            md={6}
          >
            <Box sx={{ paddingBottom: "30px" }}>
              <Typography variant="h1" component={"h1"} gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" component="p">
                Please note that we receive a high volume of emails, so it may
                take us some time to respond. We appreciate your patience and
                understanding.
              </Typography>
            </Box>

            <Box sx={{ paddingBottom: "30px" }}>
              <Typography variant="h1" component={"h1"} gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <SocialLinks color={"#000"} position={"start"} />
              </Box>
            </Box>

            <Box>
              <Typography variant="body2">
                Thank you for visiting our website. We look forward to hearing
                from you!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ContentLayout>
    </MainLayout>
  );
};
