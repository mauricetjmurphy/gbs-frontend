import React from "react";
import { Grid, IconButton, List, ListItem } from "@mui/material";
import { nanoid } from "nanoid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useWindowSize } from "../../hooks/useWindowSize";
import { navigationStyles } from "../../features/global/Navigation/navigation.styles";

interface SocialNavigationItem {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface SocialMediaProps {
  color: string;
  position: string;
}

const socialLinks = [
  { name: "Instagram", to: "https://www.instagram.com/", icon: InstagramIcon },
  { name: "Facebook", to: "https://www.facebook.com/", icon: FacebookIcon },
  { name: "Twitter", to: "https://twitter.com/", icon: TwitterIcon },
].filter(Boolean) as SocialNavigationItem[];

export const SocialLinks: React.FC<SocialMediaProps> = (props) => {
  const { width } = useWindowSize();
  return (
    <Grid
      item
      md={4}
      xs={12}
      padding={{ sm: "0px", md: "15px 0px" }}
      style={{
        justifyContent: props.position,
        ...navigationStyles.socialContainer,
      }}
    >
      <List style={navigationStyles.socialLinkList}>
        {socialLinks.map((item) => (
          <ListItem key={nanoid()} style={navigationStyles.socialListItem}>
            <IconButton
              component="a"
              href={item.to}
              rel="noreferrer"
              target="_blank"
              sx={{
                padding: "0px",
                ".MuiSvgIcon-root": {
                  width: "20px",
                  color: width < 600 ? props.color : "#000",
                },
              }}
              disableRipple
            >
              <item.icon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
