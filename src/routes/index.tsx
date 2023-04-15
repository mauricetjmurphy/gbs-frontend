import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../features/home/routes/Home";
import usePageTracking from "../hooks/usePageTracking";
// import { useAuth } from "../features/auth/hooks/useAuth";

const Vision = lazy(() => import("../features/vision/routes/Vision"));
const Article = lazy(() => import("../features/article/routes/Article"));
const Articles = lazy(() => import("../features/articles/routes/Articles"));
const Cookies = lazy(() => import("../features/legal/routes/Cookies"));
const Privacy = lazy(() => import("../features/legal/routes/Privacy"));
const Support = lazy(() => import("../features/legal/routes/Support"));
const Terms = lazy(() => import("../features/legal/routes/Terms"));

export const AppRoutes: React.FC = () => {
  usePageTracking();

  const isAuthenticated = false;

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
