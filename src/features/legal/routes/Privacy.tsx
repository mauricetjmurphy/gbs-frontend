import React from "react";

import { ContentLayout } from "../../../components";
import { privacyPolicyData } from "../../../data/privacyPolicyData";
import { LegalTitle } from "../components/LegalTitle";
import { ParagraphList } from "../components/ParagraphList";

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = (props) => {
  return (
    <>
      <LegalTitle title={"Privacy Policy"} />
      <ContentLayout title={"Privacy Policy Page"} description={""}>
        <ParagraphList data={privacyPolicyData} />
      </ContentLayout>
    </>
  );
};

export default Privacy;
