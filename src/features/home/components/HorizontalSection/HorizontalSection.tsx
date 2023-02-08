import { Box } from "@mui/material";
import React from "react";

import { type Post } from "../../types";
import { ImageCardList } from "../../../../components/Card/ImageCardList";
import { useWindowSize } from "../../../../hooks/useWindowSize";

interface HorizontalSectionProps {
  title: string;
  data: Post[] | undefined;
}

export const HorizontalSection: React.FC<HorizontalSectionProps> = (props) => {
  const { title, data } = props;
  const windowSize = useWindowSize();

  return (
    <Box
      sx={{
        padding: "100px 0px",
        display: "flex",
        maxWidth: "100vw",
      }}
    >
      <ImageCardList
        direction={"horizontal"}
        sectionTitle={title}
        data={data}
      />
    </Box>
  );
};
