import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

import {
  AdminArticleList,
  AdminKeywords,
  Dashboard,
  Titles,
  Topbar,
  AdminSidebar,
  ModifyArticle,
} from "../";

const Admin = () => {
  return (
    <Box display={"flex"} maxWidth={"100vw"}>
      <AdminSidebar />
      <Box maxWidth={"calc(100vw - 300px)"}>
        <Topbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="articles" element={<AdminArticleList />} />
          <Route path="modify-article" element={<ModifyArticle />} />
          <Route path="keywords" element={<AdminKeywords />} />
          <Route path="titles" element={<Titles />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;
