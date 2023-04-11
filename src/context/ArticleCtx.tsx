import { createContext } from "react";
import { useQuery, QueryObserverResult } from "@tanstack/react-query";

import { Card } from "../features/home/types";
import { API_URL } from "../config";

export interface ArticleContextInterface {
  data: Card[] | undefined;
  dataIsLoading: boolean;
  dataIsError: boolean;
  initialData: Card[] | undefined;
  initialDataIsLoading: boolean;
  initialDataIsError: boolean;
  refetch: any;
}

export const ArticleContext = createContext<ArticleContextInterface>({
  data: [],
  dataIsLoading: true,
  dataIsError: false,
  initialData: [],
  initialDataIsLoading: true,
  initialDataIsError: false,
  refetch: async () => {},
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
    data: initialData,
    isLoading: initialDataIsLoading,
    isError: initialDataIsError,
  } = useQuery<Card[] | undefined, Error>(
    ["articles"],
    async () => fetchData(`${API_URL}/articles`),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const {
    data,
    isLoading: dataIsLoading,
    isError: dataIsError,
    refetch,
  } = useQuery<Card[] | undefined, Error>(
    ["articles"],
    async () => fetchData(`${API_URL}/articles`),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  console.log({ data });

  const value = {
    data,
    dataIsLoading,
    dataIsError,
    initialData,
    initialDataIsLoading,
    initialDataIsError,
    refetch,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};
