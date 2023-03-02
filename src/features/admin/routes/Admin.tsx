import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AdminProps {}

export const Admin: React.FC<AdminProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
    >
      Back Home
    </Button>
  );
};

export default Admin;
