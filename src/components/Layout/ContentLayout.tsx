import { Box } from "@mui/material";
import React from "react";
import { Head } from "../Head/Head";
import { layoutStyles } from "./layout.styles";

type ContentLayoutProps = {
  children: React.ReactElement | React.ReactElement[];
  title: string;
  description: string | undefined;
};

export const ContentLayout = ({
  children,
  title,
  description,
}: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <Box sx={layoutStyles.contentlayoutContainer}>{children}</Box>;
    </>
  );
};
