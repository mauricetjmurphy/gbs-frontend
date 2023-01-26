import * as React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title: string;
  description: string | undefined;
};

export const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet title={title ? `${title} | In The Know` : undefined}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
