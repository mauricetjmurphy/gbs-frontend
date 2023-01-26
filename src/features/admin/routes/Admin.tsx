import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout, MainLayout } from "../../../components";

type Props = {};

export const Admin = (props: Props) => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContentLayout>
        <div>About</div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </ContentLayout>
    </MainLayout>
  );
};
