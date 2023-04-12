import { Box, Typography } from "@mui/material";

interface PageTitleProps {
  title: string | undefined;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      padding={"0px 15px 40px 15px"}
    >
      <Typography variant={"h2"} component={"h2"} sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
    </Box>
  );
};
