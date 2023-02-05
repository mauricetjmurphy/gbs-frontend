import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { ImageCard } from "./ImageCard";
import { Post } from "../../features/home/types";

interface ImageCardListProps {
  data: Post[] | undefined;
  sectionTitle: string;
  direction: string;
}

export const ImageCardList: React.FC<ImageCardListProps> = (props) => {
  const { data, sectionTitle, direction } = props;
  // if (isLoading) return <h1>"Loading..."</h1>;

  // if (error) return <h1>"An error has occurred"</h1>;

  const cards = data?.map((item: Post) => (
    <ListItem
      key={nanoid()}
      sx={{
        justifyContent: "center",
        padding: direction === "vertical" ? "0px" : "0px 5px",
      }}
    >
      <ImageCard
        id={item.id}
        category={item.category}
        title={item.title}
        author={item.author}
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
          }}
        >
          <Typography variant={"h1"} component={"h1"}>
            {sectionTitle}
          </Typography>

          <Divider sx={{ background: "#000", marginTop: "8px" }} />

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
              alignItems: "start",
              flexDirection: "row",
            }}
          >
            {cards}
          </List>
        </Box>
      )}
    </>
  );
};