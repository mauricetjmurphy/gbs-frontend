import { Box } from "@mui/material";
import React from "react";
import { Post } from "../../types";
import { ImageCardList } from "../../../../components/Card/ImageCardList";

type HorizontalSectionProps = {
  title: string;
  data: Post[] | undefined;
};

export const HorizontalSection: React.FC<HorizontalSectionProps> = (props) => {
  const { title, data } = props;

  return (
    <Box sx={{ padding: "100px 0px" }}>
      <ImageCardList
        direction={"horizontal"}
        sectionTitle={title}
        data={data}
      />
    </Box>
  );
};
