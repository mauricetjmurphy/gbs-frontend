import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Card } from "../features/home/types";
import { API_URL } from "../config";

export interface ArticleContextInterface {
  data: Card[] | undefined;
  dataIsLoading: boolean;
  dataIsError: boolean;
}

export const ArticleContext = createContext<ArticleContextInterface>({
  data: [],
  dataIsLoading: true,
  dataIsError: false,
});

export const ArticleContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const {
    data: data,
    isLoading: dataIsLoading,
    isError: dataIsError,
  } = useQuery<Card[] | undefined, Error>(
    ["articles"],
    async () => fetchData(`${API_URL}/articles`),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const value = {
    data,
    dataIsLoading,
    dataIsError,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};
