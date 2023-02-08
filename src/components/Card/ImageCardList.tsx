import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { type Post } from "../../features/home/types";
import { useWindowSize } from "../../hooks/useWindowSize";

import { ImageCard } from "./ImageCard";

interface ImageCardListProps {
  data: Post[] | undefined;
  sectionTitle: string;
  direction: string;
}

export const ImageCardList: React.FC<ImageCardListProps> = (
  props: ImageCardListProps
) => {
  const { data, sectionTitle, direction } = props;
  const { width } = useWindowSize();
  // if (isLoading) return <h1>"Loading..."</h1>;

  // if (error) return <h1>"An error has occurred"</h1>;

  const cards = data?.map((item: Post) => (
    <Grid
      item
      key={nanoid()}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ImageCard
        id={item.id}
        title={item.title}
        image_url={item.image_url}
        body={item.body}
      />
    </Grid>
  ));

  return (
    <>
      {direction === "vertical" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "0 20px" }}>
            <Typography variant={"h1"} component={"h1"}>
              {sectionTitle}
            </Typography>

            <Divider
              sx={{ background: "#000", marginTop: "8px", width: "100%" }}
            />
          </Box>

          <Grid
            container
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {cards}
          </Grid>
        </Box>
      )}

      {direction === "horizontal" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant={"h1"} component={"h1"} sx={{ fontSize: "28px" }}>
            {sectionTitle}
          </Typography>

          <List
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: width > 600 ? "row" : "column",
              justifyContent: width > 600 ? "center" : "start",
              alignItems: width > 600 ? "start" : "center",
            }}
          >
            {cards}
          </List>
        </Box>
      )}
    </>
  );
};
