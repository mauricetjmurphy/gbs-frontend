import React, { forwardRef } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Grid, Typography } from "@mui/material";

import { useWindowSize } from "../../../../hooks/useWindowSize";
import { CF_IMAGE_URL } from "../../../../config";

interface CategoryCardProps {
  category: string;
  image_url: string;
  path: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = forwardRef(
  (props: CategoryCardProps, ref: React.Ref<HTMLDivElement>) => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    return (
      <Grid ref={ref} xs={12} md={3} item>
        <Button
          disableRipple
          fullWidth
          onClick={() => {
            navigate(props.path, { state: { category: props.category } });
          }}
          sx={{
            textTransform: "none",
            padding: "0px",
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <img
            src={`${CF_IMAGE_URL}/${props.image_url}`}
            alt={props.category}
            style={{ width: "100%" }}
            loading={"lazy"}
          />
          <Box sx={{ textAlign: "left", width: "100%" }}>
            <Typography
              variant="h2"
              component="h1"
              color="#000"
              gutterBottom
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                textAlign: "center",
                paddingTop: "20px",
              }}
            >
              {props.category}
            </Typography>
          </Box>
        </Button>
      </Grid>
    );
  }
);
