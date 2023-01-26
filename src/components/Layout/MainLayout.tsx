import React from "react";
import { Footer } from "../Footer/Footer";
import MainNavigation from "../Navigation/MainNavigation";
import { ContentLayout } from "./ContentLayout";

type MainLayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
};
