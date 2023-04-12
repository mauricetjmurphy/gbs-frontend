import { FC } from "react";

import { ContentLayout } from "../../global";
import { termsData } from "../../../data/termsData";
import { LegalTitle } from "../components/LegalTitle";
import { ParagraphList } from "../components/ParagraphList";

interface TermsProps {}

const Terms: FC<TermsProps> = (props) => {
  return (
    <>
      <LegalTitle title={"Terms of Service"} />
      <ContentLayout title={"Terms of Service Page"} description={""}>
        <ParagraphList data={termsData} />
      </ContentLayout>
    </>
  );
};

export default Terms;
