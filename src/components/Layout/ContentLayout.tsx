import { Box } from "@mui/material";
import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

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
  const { width } = useWindowSize();
  return (
    <Box
      sx={{
        padding: width > 600 ? "0 150px" : "0px 20px",
        ...layoutStyles.contentlayoutContainer,
      }}
    >
      <Box>
        <Head title={title} description={description} />
        {children}
      </Box>
    </Box>
  );
};
