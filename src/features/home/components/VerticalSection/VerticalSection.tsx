import { Box, Divider, Grid, List, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";

import { MainImageCard } from "../../../../components/Card/MainImageCard";
import { TextCard } from "../../../../components/Card/TextCard";
import { type Post } from "../../types";
import { ImageCardList } from "../../../../components/Card/ImageCardList";

import { verticalSectionStyles } from "./verticalSection.styles";
import { useWindowSize } from "../../../../hooks/useWindowSize";

interface VerticalSectionProps {
  direction?: "flip";
  data: Post[] | undefined;
}

interface VerticalCardProps {
  data: Post[] | undefined;
}

interface VerticalTitledListProps {
  title: string;
  data: Post[] | undefined;
}

const VerticalTitledList: React.FC<VerticalTitledListProps> = (props) => {
  const { title, data } = props;
  // if (isLoading) return <h1>"Loading..."</h1>;
  // if (error) return <h1>"An error has occurred"</h1>;

  const cards = data?.map((item: any, index: number) => (
    <TextCard id={item.id} title={item.title} key={nanoid()} body={item.body} />
  ));

  return (
    <Box
      sx={{
        padding: "0px 10px",
        ...verticalSectionStyles.verticalTitledListContainer,
      }}
    >
      <Box>
        <Typography variant="h1" component={"h1"}>
          {title}
        </Typography>
        <Divider sx={{ background: "#000", marginTop: "8px" }} />
      </Box>

      <List>{cards}</List>
    </Box>
  );
};

const VerticalCard: React.FC<VerticalCardProps> = ({
  data,
}: VerticalCardProps) => {
  return (
    <Box sx={verticalSectionStyles.verticalCardContainer}>
      <MainImageCard data={data} />
    </Box>
  );
};

export const VerticalSection: React.FC<VerticalSectionProps> = (props) => {
  const { data } = props;
  const { width } = useWindowSize();

  const imageCardListData = data?.slice(0, 2);
  const verticalCardData = data?.slice(0, 1);
  const verticalTitledListData = data?.slice(0, 3);

  return (
    <Box
      sx={{
        background: "#fff",
        padding: width > 600 ? "50px" : "0px",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          margin: "0px",
          width: "100%",
          maxWidth: "100vw",
          ".MuiGrid-item": { paddingLeft: width < 600 ? "0px" : "32px" },
        }}
      >
        <Grid item md={2} sm={12} sx={{}}>
          <ImageCardList
            direction={"vertical"}
            sectionTitle={"Top Stories"}
            data={imageCardListData}
          />
        </Grid>
        <Grid item md={8} sm={12}>
          <VerticalCard data={verticalCardData} />
        </Grid>
        <Grid item md={2} sm={12}>
          <VerticalTitledList title="Opinion" data={verticalTitledListData} />
        </Grid>
      </Grid>
    </Box>
  );
};
