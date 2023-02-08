import { Box, Divider, List, ListItem, Typography } from "@mui/material";
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
    <ListItem
      key={nanoid()}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: direction === "vertical" ? "10px" : "0px 5px",
      }}
    >
      <ImageCard
        id={item.id}
        title={item.title}
        image_url={item.image_url}
        body={item.body}
      />
    </ListItem>
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
            padding: width > 600 ? "0px" : "0 10px",
          }}
        >
          <Typography variant={"h1"} component={"h1"}>
            {sectionTitle}
          </Typography>

          <Divider
            sx={{ background: "#000", marginTop: "8px", width: "100%" }}
          />

          <List
            sx={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {cards}
          </List>
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
