import { Box } from "@mui/material";
import React from "react";
import { layoutStyles } from "./layout.styles";

type ContentLayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <Box sx={layoutStyles.contentlayoutContainer}>{children}</Box>;
};
