import { Box } from "@mui/material";
import React from "react";

import { Head } from "../Head/Head";

import { layoutStyles } from "./layout.styles";

interface ContentLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
  description: string | undefined;
}

export const ContentLayout = ({
  children,
  title,
  description,
}: ContentLayoutProps) => {
  return (
    <Box sx={layoutStyles.contentlayoutContainer}>
      <Box>
        <Head title={title} description={description} />
        {children}
      </Box>
    </Box>
  );
};
