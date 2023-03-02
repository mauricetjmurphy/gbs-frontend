import React from "react";
import { styled } from "@mui/material/styles";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { Head } from "../../../components/Head/Head";

interface ContentLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  title: string | undefined;
  description: string | undefined;
}

const ContentLayoutContainer = styled("div")(({ theme }) => ({
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  background: "#faf5f5",
  minHeight: "100vh",
  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 100px",
  },
}));

export const ContentLayout = ({
  children,
  title,
  description,
}: ContentLayoutProps) => {
  const { width } = useWindowSize();
  return (
    <ContentLayoutContainer>
      <Head title={title} description={description} />
      {children}
    </ContentLayoutContainer>
  );
};
