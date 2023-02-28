import React, { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Card } from "../../home/types";
import { API_URL } from "../../../config";

import { navigationStyles } from "./navigation.styles";

interface SearchProps {}

interface SerchItemsListProps {
  data: Card[];
}

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

const SearchItemList: React.FC<SerchItemsListProps> = (props) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {props.data.map((item) => (
        <>
          <Grid item md={3}>
            <img
              src={`/images/${item.image_url?.split(".")[0]}-small.jpg`}
              alt={item.title}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item md={9}>
            <Typography variant="body2">{item.title}</Typography>
            <Typography>{}</Typography>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export const SearchSection: React.FC<SearchProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchItems, setSearchItems] = useState<Card[]>([]);

  const {
    data: techData,
    isLoading: techArtiiclesIsLoading,
    isError: techIsError,
  } = useQuery<Card[], Error>(
    ["tech-articles"],
    async () =>
      await fetch(`${API_URL}/tech-articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  console.log({ techData });

  const {
    data: climateData,
    isLoading: climateArtiiclesIsLoading,
    isError: climateIsError,
  } = useQuery<Card[], Error>(
    ["climate-articles"],
    async () =>
      await fetch(`${API_URL}/climate-articles`).then(
        async (response) => await response.json()
      ),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  console.log({ climateData });

  if (techArtiiclesIsLoading || climateArtiiclesIsLoading) {
    return null;
  }

  if (techIsError || climateIsError) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <p>Failed to fetch data!</p>
      </Box>
    );
  }

  const data = [...climateData, ...techData];

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) return setSearchItems([]);

    const filteredArray = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchItems(filteredArray.slice(0, 5));
  };

  return (
    <Grid
      sx={{ position: "relative" }}
      item
      md={4}
      xs={12}
      style={{ ...navigationStyles.searchContainer }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ width: "18px" }} />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ fontSize: "16px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={onChangeHandler}
        />
      </Search>
      <Box
        sx={{
          position: "absolute",
          top: "46px",
          background: "#fff",
          zIndex: 10,
          width: "300px",
          padding:
            searchTerm.length > 0 && searchItems.length > 0 ? "10px" : "0px",
        }}
      >
        <SearchItemList data={searchItems} />
      </Box>
    </Grid>
  );
};
