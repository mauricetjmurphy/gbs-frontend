import { Box, Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SocialLinks } from "../SocialMedia/SocialLinks";
import { footerStyles } from "./footer.styles";
import { SignUp } from "./SignUp";

const links = [
  { name: "Terms of Use", route: "/terms" },
  { name: "Privacy Policy", route: "/privacy" },
  { name: "Cookies Policy", route: "/cookies" },
  { name: "Contact Support", route: "/support" },
];

type Props = {};

export const Footer = (props: Props) => {
  const navigate = useNavigate();
  const windowSize = useWindowSize();

  return (
    <Box sx={footerStyles.footerContainer}>
      <Box
        sx={{
          ...(windowSize.width > 400
            ? { padding: "0 100px" }
            : { padding: "0 20px" }),
          ...footerStyles.footerLinkSection,
        }}
      >
        <Grid
          container
          sx={{ padding: "20px", display: "flex", justifyContent: "center" }}
        >
          {links.map((item) => (
            <Grid
              xs={12}
              md={2}
              item
              key={nanoid()}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                color="inherit"
                sx={{ fontSize: "12px" }}
                onClick={() => navigate(item.route)}
              >
                {item.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={footerStyles.footerNewsLetterSection}>
        <SignUp />
      </Box>
      <Box sx={footerStyles.footerSocialSection}>
        <Grid
          sx={
            windowSize.width > 400
              ? { padding: "0 100px" }
              : { padding: "0 20px" }
          }
          direction="row"
          container
        >
          <Grid xs={12} md={8} item>
            <Typography sx={{ fontSize: "14px", color: "#4B5563" }}>
              Copyright © 2023 Gemtech Solutions, Inc. All rights reserved.
              Gemtech Solutions® and its related marks are registered trademarks
              of Gemtech Solutions LTD.
            </Typography>
          </Grid>
          <SocialLinks />
        </Grid>
      </Box>
    </Box>
  );
};
