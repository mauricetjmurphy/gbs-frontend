import React from "react";
import { Route, Routes } from "react-router-dom";

import { Vision } from "../features/vision/routes/Vision";
import { Admin } from "../features/admin/routes/Admin";
import { Article } from "../features/article";
// import { Login } from "../features/auth/routes/Login";
import { Home } from "../features/home/routes/Home";
import { Cookies } from "../features/legal/routes/Cookies";
import { Privacy } from "../features/legal/routes/Privacy";
import { Support } from "../features/legal/routes/Support";
import { Terms } from "../features/legal/routes/Terms";

// import { PrivateRoutes } from "./Private";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/article/:id" element={<Article />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/policy/:policyId" element={<PrivateRoutes />} /> */}

      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
