import { Box, Typography } from "@mui/material";
import React from "react";

import { pageTitleStyles } from "./pageTitle.styles";

interface PageTitleProps {
  title: string | undefined;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { title } = props;
  return (
    <Box style={pageTitleStyles.pageTitleContainer}>
      <Typography variant={"h2"} component={"h2"} sx={{}}>
        {title}
      </Typography>
    </Box>
  );
};
