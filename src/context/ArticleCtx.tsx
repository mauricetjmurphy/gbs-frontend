import { createContext, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import { Card } from "../features/home/types";
import { API_URL } from "../config";

interface ArticleContextInterface {
  techData: Card[] | undefined;
  techIsLoading: boolean;
  techIsError: boolean;
  climateData: Card[] | undefined;
  climateIsLoading: boolean;
  climateIsError: boolean;
}

export const ArticleContext = createContext<ArticleContextInterface>({
  techData: [],
  techIsLoading: true,
  techIsError: false,
  climateData: [],
  climateIsLoading: true,
  climateIsError: false,
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
    data: techData,
    isLoading: techIsLoading,
    isError: techIsError,
  } = useQuery<Card[], Error>(
    ["tech-articles"],
    async () => fetchData(`${API_URL}/tech-articles`),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const {
    data: climateData,
    isLoading: climateIsLoading,
    isError: climateIsError,
  } = useQuery<Card[], Error>(
    ["climate-articles"],
    async () => fetchData(`${API_URL}/climate-articles`),
    {
      staleTime: 1000 * 60 * 60 * 24 * 7, // cache for a week
    }
  );

  const memoizedValue = useCallback(
    () => ({
      techData,
      techIsLoading,
      techIsError,
      climateData,
      climateIsLoading,
      climateIsError,
    }),
    [
      techData,
      techIsLoading,
      techIsError,
      climateData,
      climateIsLoading,
      climateIsError,
    ]
  );

  return (
    <ArticleContext.Provider value={memoizedValue()}>
      {children}
    </ArticleContext.Provider>
  );
};
