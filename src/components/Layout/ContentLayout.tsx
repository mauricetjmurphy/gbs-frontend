import { Box } from "@mui/material";
import React from "react";

import { useWindowSize } from "../../hooks/useWindowSize";
import { Head } from "../Head/Head";

import { layoutStyles } from "./layout.styles";

interface ContentLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  title: string | undefined;
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
      maxWidth={"100vw"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        padding: width > 600 ? "0 100px" : "0px 20px",
        background: "#faf5f5",
        minHeight: "100vh",
      }}
    >
      <Head title={title} description={description} />
      {children}
    </Box>
  );
};
