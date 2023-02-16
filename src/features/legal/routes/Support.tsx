import React from "react";

import { ContentLayout } from "../../../components";
import UnderConstruction from "../../../components/UnderConstruction/UnderConstruction";

type Props = {};

export const Support = (props: Props) => {
  return (
    <ContentLayout title={"Support Page"} description={""}>
      <UnderConstruction />
    </ContentLayout>
  );
};
