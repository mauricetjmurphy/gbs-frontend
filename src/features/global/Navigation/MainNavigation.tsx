import * as React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  Drawer,
  ListItemButton,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";
import { nanoid } from "nanoid";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { SocialLinks } from "../../../components/SocialMedia/SocialLinks";

import { SearchSection } from "./NavSearch";
import { navigationStyles } from "./navigation.styles";

interface PageNavigationProps {
  handleDrawerToggle: () => void;
}

interface TitleProps {
  title: string;
}

interface MainNavigationProps {
  text: string;
}

interface NavigationItem {
  name: string;
  route: string;
  category: string;
}

const navigation = [
  { name: "Climate change", route: "/climate-change" },
  { name: "Green tech", route: "/green-tech" },
  // { name: "Opinion", route: "/opinion" },
  { name: "Our Vision", route: "/vision" },
  { name: "All Articles", route: "/articles", category: "All Articles" },
].filter(Boolean) as NavigationItem[];

const PageNavigation: React.FC<PageNavigationProps> = (props) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdminClick = () => {
    setAnchorEl(null);
    navigate("/admin");
  };

  return (
    <Box
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        ...navigationStyles.secondaryNavSection,
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
        }}
      >
        <img
          style={{ width: "48px", height: "48px" }}
          src={"/logo.png"}
          alt=""
        />
      </Box>

      <List style={navigationStyles.pageLinkList}>
        {width < 600 && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {width > 600 &&
          navigation.map((item) => (
            <ListItemButton
              style={navigationStyles.pageListItem}
              key={nanoid()}
              onClick={() =>
                navigate(item.route, { state: { category: item.category } })
              }
            >
              {item.name}
            </ListItemButton>
          ))}
      </List>

      {width > 960 && (
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleAdminClick}>Admin</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

const Title: React.FC<TitleProps> = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    <Grid
      item
      md={4}
      xs={12}
      paddingTop={{ sm: "0px", md: "20px" }}
      style={{
        ...navigationStyles.titleContainer,
      }}
    >
      <Typography
        variant={"h1"}
        component={"h1"}
        onClick={() => navigate("/")}
        sx={{
          fontWeight: 400,
          cursor: "pointer",
          textAlign: "center",
          paddingBottom: { xs: "20px", sm: "0px" },
        }}
      >
        {props.title}
      </Typography>
    </Grid>
  );
};

export const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  const { width } = useWindowSize();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navigation.map((item) => (
          <ListItem key={nanoid()} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.route, { state: { category: item.category } });
              }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="top"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              top: "50px",
              boxSizing: "border-box",
              width: "100vw",
              zIndex: 400,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <PageNavigation handleDrawerToggle={handleDrawerToggle} />
        <Grid
          container
          padding={{ sm: "20px", md: "20px 100px" }}
          style={{
            ...navigationStyles.primaryNavSection,
          }}
        >
          <SearchSection />
          <Title title={"Never Too Late"} />
          {width > 960 && (
            <SocialLinks
              position={width < 960 ? "center" : "end"}
              color="#000"
            />
          )}
        </Grid>
      </Box>
    </>
  );
};
