import React from "react";

import { ContentLayout } from "../../../components";
import { termsData } from "../../../data/termsData";
import { LegalTitle } from "../components/LegalTitle";
import { ParagraphList } from "../components/ParagraphList";

interface termsProps {}

export const Terms: React.FC<termsProps> = (props) => {
  return (
    <>
      <LegalTitle title={"Terms of Service"} />
      <ContentLayout title={"Terms of Service Page"} description={""}>
        <ParagraphList data={termsData} />
      </ContentLayout>
    </>
  );
};
