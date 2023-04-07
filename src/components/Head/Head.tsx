import { Helmet } from "react-helmet-async";

interface HeadProps {
  title: string | undefined;
  description: string | undefined;
  route?: string;
}

export const Head = ({ title, description, route }: HeadProps) => {
  return (
    <Helmet title={title ? `${title} | Never Too Late` : undefined}>
      <meta name="description" content={description} />
      <link rel="cononical" href={`${route}`} />
    </Helmet>
  );
};
