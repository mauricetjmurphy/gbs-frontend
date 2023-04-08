import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
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

export default Dashboard;
