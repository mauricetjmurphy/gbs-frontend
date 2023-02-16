import { Divider, Typography } from "@mui/material";
import React from "react";

interface ListHeadingProps {
  listTitle: string;
}

export const ListHeading: React.FC<ListHeadingProps> = (props) => {
  return (
    <>
      <Typography variant={"h1"} component={"h1"}>
        {props.listTitle}
      </Typography>
      <Divider
        sx={{
          background: "#000",
          marginTop: "8px",
          width: "100%",
        }}
      />
    </>
  );
};
