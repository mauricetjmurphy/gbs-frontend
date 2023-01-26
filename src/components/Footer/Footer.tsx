import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { footerStyles } from "./footer.styles";
import { SignUp } from "./SignUp";

const links = [
  { name: "Terms of Use", route: "/terms" },
  { name: "Privacy Policy", route: "/privacy" },
  { name: "Cookies Policy", route: "/cookies" },
  { name: "Site Map", route: "/sitemap" },
  { name: "Contact Support", route: "/support" },
];

const socialIcons = [
  { name: "", icon: "" },
  { name: "", icon: "" },
];

type Props = {};

export const Footer = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box sx={footerStyles.footerContainer}>
      <Box sx={footerStyles.footerLinkSection}>
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
        <Grid sx={{ padding: "0 100px" }} direction="row" container>
          <Grid xs={12} md={8} item>
            <Typography sx={{ fontSize: "14px", color: "#4B5563" }}>
              Copyright © 2023 Gemtech Solutions, Inc. All rights reserved.
              Gemtech Solutions® and its related marks are registered trademarks
              of Gemtech Solutions LTD.
            </Typography>
          </Grid>
          <Grid xs={12} md={4} item>
            <List>
              {socialIcons.map((item) => (
                <ListItem key={nanoid()}>{item.icon}</ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
