import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

import AdminArticleList from "../components/Articles/AdminArticleList";
// import Keywords from "../path/to/Keywords";
// import Titles from "../path/to/Titles";
import Topbar from "../components/global/Topbar";
import Sidebar from "../components/global/Sidebar";
import AdminKeywords from "../components/Keywords/AdminKeywords";
import Dashboard from "../components/Dashboard/Dashboard";
import ModifyArticle from "../components/Articles/ModifyArticle";

const Admin = () => {
  return (
    <Box display={"flex"} maxWidth={"100vw"}>
      <Sidebar />
      <Box maxWidth={"calc(100vw - 300px)"}>
        <Topbar />
        {/* <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="articles" element={<AdminArticleList />} />
          <Route path="modify-article" element={<ModifyArticle />} />
          <Route path="keywords" element={<AdminKeywords />} />
          <Route path="titles" element={<Titles />} />
        </Routes> */}
      </Box>
    </Box>
  );
};

export default Admin;
