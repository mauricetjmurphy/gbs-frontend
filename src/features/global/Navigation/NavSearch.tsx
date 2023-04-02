import React, { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

import { API_URL, CF_IMAGE_URL } from "../../../config";
import { Card } from "../../home/types";

import { navigationStyles } from "./navigation.styles";

interface SearchProps {}

interface SerchItemsListProps {
  data: Card[];
  searchTerm: string;
  setSearchTerm: (arg: string) => void;
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
  [theme.breakpoints.up("xs")]: {
    margin: "20px",
  },
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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
    },
  },
}));

const SearchItemList: React.FC<SerchItemsListProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "60px",
        background: "#fff",
        zIndex: 10,
        border:
          props.searchTerm.length > 0 && props.data.length > 0
            ? "1px solid #00000050"
            : "none",
        height:
          props.searchTerm.length > 0 && props.data.length > 0
            ? "500px"
            : "0px",
        overflow: "scroll",
      }}
    >
      {props.data.map((item) => (
        <Grid
          key={nanoid()}
          onClick={() => {
            navigate(`/article/${item.Id}`);
            props.setSearchTerm("");
          }}
          container
          direction={{ xs: "row", md: "row" }}
          sx={{
            "&:hover": { background: "#cccccc95" },
            cursor: "pointer",
          }}
        >
          <Grid item xs={4} md={4}>
            <Box sx={{ overflow: "hidden", padding: "10px" }}>
              <img
                src={`${CF_IMAGE_URL}/${item.Image_url}`}
                alt={item.Title}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={8} md={8}>
            <Typography
              sx={{ paddingTop: "10px", fontWeight: "bold" }}
              variant="body2"
            >
              {item.Title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#818181" }}>
              {`${item.Body[0].substring(0, 50)}...`}
            </Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} />
        </Grid>
      ))}
    </Box>
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
      item.Title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchItems(filteredArray.slice(0, 15));
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
          endAdornment={
            <CancelIcon
              onClick={() => setSearchTerm("")}
              sx={{
                width: "18px",
                color: "#9D9D99",
                cursor: "pointer",
                opacity: "30%",
                "&:hover": {
                  opacity: "100%",
                },
              }}
            />
          }
        />
      </Search>

      <SearchItemList
        searchTerm={searchTerm}
        data={searchItems}
        setSearchTerm={setSearchTerm}
      />
    </Grid>
  );
};
