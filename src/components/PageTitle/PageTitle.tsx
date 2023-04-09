import { Box, Typography } from "@mui/material";

import { pageTitleStyles } from "./pageTitle.styles";

interface PageTitleProps {
  title: string | undefined;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <Box style={pageTitleStyles.pageTitleContainer}>
      <Typography variant={"h2"} component={"h2"} sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
    </Box>
  );
};
