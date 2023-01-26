import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

type ListImageCardProps = {
  id: string;
  category: string;
  title: string;
  author: string;
  image_url: string;
};

export const ListImageCard = ({
  id,
  category,
  title,
  author,
  image_url,
}: ListImageCardProps) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/article/${id}`)}
      sx={{
        maxWidth: "90%",
        "&.MuiPaper-root": {
          boxShadow: "none",
        },
      }}
    >
      <CardActionArea
        sx={{
          "&.MuiButtonBase-root": {
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <CardMedia
          sx={{
            "&.MuiCardMedia-root": {
              borderRadius: "20px",
            },
          }}
          component="img"
          height="200"
          image={image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold" }}
            variant="body1"
            component="h1"
            color="#3b82f6"
          >
            {category.toUpperCase()}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color="#000"
            sx={{
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="body2" color={"#6b7280"}>
            BY {author.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
