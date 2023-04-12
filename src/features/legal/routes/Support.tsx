import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { ContactForm } from "../components/ContactForm";
import { SocialLinks } from "../../../components/SocialMedia/SocialLinks";
import { MainLayout, ContentLayout } from "../../global";

interface SupportProps {}

const Support: FC<SupportProps> = (props) => {
  return (
    <MainLayout>
      <ContentLayout title={"Support Page"} description={""}>
        <Grid
          container
          padding={{ xs: "20px", sm: "50px" }}
          sx={{
            background: "#fff",
            margin: "50px 0px",
          }}
        >
          <Grid padding={{ xs: "10px", sm: "30px" }} item xs={12} md={6}>
            <Typography sx={{ paddingLeft: "8px" }} variant="h1" component="h1">
              Contact Us
            </Typography>
            <ContactForm />
          </Grid>
          <Grid padding={{ xs: "10px", sm: "30px" }} item xs={12} md={6}>
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

export default Support;
