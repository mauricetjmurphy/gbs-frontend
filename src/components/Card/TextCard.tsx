import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

type TextCardProps = {
  title: string;
  category: string;
  index: number;
  id: string;
};

export const TextCard = ({ title, category, index, id }: TextCardProps) => {
  const navigate = useNavigate();

  return (
    <ListItem sx={{ display: "flex", marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          padding: "14px 20px",
          marginRight: "15px",
          border: "2px solid #FF4D53",
          borderRadius: "27px",
        }}
      >
        <Box sx={{ color: "#FF4D53", fontWeight: "bold", fontSize: "20px" }}>
          {index + 1}
        </Box>
      </Box>
      <ListItemText>
        <Typography
          gutterBottom
          sx={{ fontWeight: "bold" }}
          variant="body1"
          component="h1"
          color="#3b82f6"
        >
          {category}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="#000"
          onClick={() => navigate(`/article/${id}`)}
          sx={{
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          {title}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};
