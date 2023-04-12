import { Box, Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { SocialLinks } from "../../../../components/SocialMedia/SocialLinks";

import { footerStyles } from "./footer.styles";
import { SignUp } from "./SignUp";

const links = [
  { name: "Terms of Use", route: "/terms" },
  { name: "Privacy Policy", route: "/privacy" },
  { name: "Cookies Policy", route: "/cookies" },
  { name: "Contact Support", route: "/support" },
];

interface Props {}

export const Footer = (props: Props) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <Box sx={footerStyles.footerContainer}>
      <Box sx={footerStyles.footerNewsLetterSection}>
        <SignUp />
      </Box>
      <Box
        padding={{ sm: "0 20px", md: "0 100px" }}
        sx={{
          ...footerStyles.footerLinkSection,
        }}
      >
        <Grid
          container
          sx={{ padding: "20px", display: "flex", justifyContent: "center" }}
        >
          {links.map((item) => (
            <Grid
              xs={3}
              md={2}
              item
              key={nanoid()}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                color="inherit"
                sx={{}}
                onClick={() => {
                  navigate(item.route);
                }}
              >
                <Typography variant="subtitle1" component={"h1"}>
                  {item.name}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={footerStyles.footerSocialSection}>
        <Grid padding={{ sm: "0px", md: "0 100px" }} direction="row" container>
          <Grid xs={12} md={8} item>
            <Typography sx={{ fontSize: "14px", color: "#4B5563" }}>
              Copyright © 2023 Gemtech Solutions, Ltd. All rights reserved.
              Gemtech Solutions® and its related marks are registered trademarks
              of Gemtech Solutions LTD.
            </Typography>
          </Grid>
          <SocialLinks
            position={width < 600 ? "center" : "end"}
            color="#4B5563"
          />
        </Grid>
      </Box>
    </Box>
  );
};
