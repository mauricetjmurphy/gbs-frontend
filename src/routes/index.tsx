import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "../features/about/routes/About";
import { Admin } from "../features/admin/routes/Admin";
import { Article } from "../features/article";
// import { Login } from "../features/auth/routes/Login";
import { Home } from "../features/home/routes/Home";

// import { PrivateRoutes } from "./Private";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/article/:id" element={<Article />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/policy/:policyId" element={<PrivateRoutes />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
