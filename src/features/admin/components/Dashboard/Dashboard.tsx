import { Box, Typography } from "@mui/material";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"calc(100% - 70px)"}
    >
      <Typography variant="h1">Welcome to the admin dashboard</Typography>
    </Box>
  );
};
