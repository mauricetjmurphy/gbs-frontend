import { Helmet } from "react-helmet-async";

interface HeadProps {
  title: string | undefined;
  description: string | undefined;
}

export const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet title={title ? `${title} | Never Too Late` : undefined}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
