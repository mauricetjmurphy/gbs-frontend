import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import SearchIcon from "@mui/icons-material/Search";

import { SocialLinks } from "../SocialMedia/SocialLinks";

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

interface PageNavigationProps {}

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

const PageNavigation: React.FC<PageNavigationProps> = () => {
  return (
    <Box style={navigationStyles.secondaryNavSection}>
      <List style={navigationStyles.pageLinkList}>
        {navigation.map((item) => (
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
    <Grid item md={4} xs={12} style={navigationStyles.searchContainer}>
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
  return (
    <Grid item md={4} xs={12} style={navigationStyles.titleContainer}>
      <Typography
        variant={"h1"}
        component={"h1"}
        sx={{ fontSize: "30px", cursor: "pointer" }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <Box style={{ overflow: "hidden" }}>
      <PageNavigation />
      <Grid container style={navigationStyles.primaryNavSection}>
        <SearchSection />
        <Title title={"Never Too Late"} />
        <SocialLinks />
      </Grid>
    </Box>
  );
};
