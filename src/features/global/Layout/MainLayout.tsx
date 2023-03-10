import React from "react";

import { Footer } from "../Footer/Footer";
import { MainNavigation } from "../Navigation/MainNavigation";

interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main style={{ maxWidth: "100vw" }}>
      <MainNavigation text="test" />
      {children}
      <Footer />
    </main>
  );
};
