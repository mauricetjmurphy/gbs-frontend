import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ContentLayout, MainLayout } from "../../../components";

interface Props {}

export const Admin = (props: Props) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContentLayout title={"Admin Page"} description={"Administrator page"}>
        <div>About</div>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </ContentLayout>
    </MainLayout>
  );
};
