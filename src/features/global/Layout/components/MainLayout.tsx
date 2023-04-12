import { ReactElement } from "react";

import { Footer, MainNavigation } from "../..";

interface MainLayoutProps {
  children: ReactElement | ReactElement[];
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
