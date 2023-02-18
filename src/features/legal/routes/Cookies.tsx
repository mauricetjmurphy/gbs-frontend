import React from "react";

import { ContentLayout } from "../../../components";
import { cookiesPolicyData } from "../../../data/cookiesPolicyData";
import { LegalTitle } from "../components/LegalTitle";
import { ParagraphList } from "../components/ParagraphList";

interface CookiesProps {}

export const Cookies: React.FC<CookiesProps> = (props) => {
  return (
    <>
      <LegalTitle title={"Cookies Policy"} />
      <ContentLayout title={"Cookies Policy Page"} description={""}>
        <ParagraphList data={cookiesPolicyData} />
      </ContentLayout>
    </>
  );
};
