import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Typography,
  Drawer,
  Divider,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { nanoid } from "nanoid";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { SocialLinks } from "../SocialMedia/SocialLinks";
import { useWindowSize } from "../../hooks/useWindowSize";

import { navigationStyles } from "./navigation.styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderBottom: "1px solid #000",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // borderBottom: "1px solid #000",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface PageNavigationProps {
  handleDrawerToggle: () => void;
}

interface SearchProps {}

interface TitleProps {
  title: string;
}

interface MainNavigationProps {
  text: string;
}

interface NavigationItem {
  name: string;
  route: string;
}

const navigation = [
  { name: "Urban", route: "/urban" },
  { name: "Climate change", route: "/climate-change" },
  { name: "Opinion", route: "/opinion" },
  { name: "Our Vision", route: "/vision" },
  { name: "All Articles", route: "/articles" },
].filter(Boolean) as NavigationItem[];

const PageNavigation: React.FC<PageNavigationProps> = (props) => {
  const { width } = useWindowSize();
  return (
    <Box
      style={{
        justifyContent: width > 600 ? "center" : "space-between",
        ...navigationStyles.secondaryNavSection,
      }}
    >
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
            <ListItem style={navigationStyles.pageListItem} key={nanoid()}>
              <Button
                sx={{
                  padding: "0px",
                  color: "#000",
                  "&:hover": {
                    color: "#00000080",
                    backgroundColor: "transparent",
                  },
                }}
                disableRipple
              >
                {item.name}
              </Button>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

const SearchSection: React.FC<SearchProps> = (props) => {
  return (
    <Grid item md={4} xs={12} style={{ ...navigationStyles.searchContainer }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ width: "18px" }} />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ fontSize: "16px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Grid>
  );
};

const Title: React.FC<TitleProps> = (props) => {
  const { title } = props;
  const { width } = useWindowSize();
  return (
    <Grid
      item
      md={4}
      xs={12}
      style={{
        ...navigationStyles.titleContainer,
        paddingTop: width > 600 ? "0px" : "20px",
      }}
    >
      <Typography
        variant={"h1"}
        component={"h1"}
        sx={{ fontSize: "30px", cursor: "pointer", textAlign: "center" }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  const { width } = useWindowSize();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navigation.map((item) => (
          <ListItem key={nanoid()} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
          anchor="left"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              marginTop: "50px",
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box style={{ overflow: "hidden" }}>
        <PageNavigation handleDrawerToggle={handleDrawerToggle} />
        <Grid
          container
          style={{
            padding: "20px 100px",
            ...navigationStyles.primaryNavSection,
          }}
        >
          <SearchSection />
          <Title title={"Never Too Late"} />
          <SocialLinks />
        </Grid>
      </Box>
    </>
  );
};
