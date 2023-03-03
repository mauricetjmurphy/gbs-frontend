import * as React from "react";
// import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ThemeOptions } from "@material-ui/core";

import { ColorModeContext, useMode } from "../theme/theme";
import { ScrollToTop } from "../lib/ScrollToTop";
import { ArticleContextProvider } from "../state/ArticleCtx";

const queryClient = new QueryClient();

const handleRefreshClick = async () => {
  await navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });

  caches.keys().then(async (keyList) => {
    return await Promise.all(
      keyList.map(async (key) => {
        return await caches.delete(key);
      })
    );
  });

  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

const ErrorFallback: React.FC = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      role="alert"
    >
      <Typography variant={"h4"} sx={{ fontWeight: "400" }} gutterBottom>
        Please bear with us...
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "100" }} gutterBottom>
        Sorry for the inconvenience. We suggest you try{" "}
        <b>refreshing the page</b> to resolve the issue.
      </Typography>
      <Button
        sx={{ margin: "30px" }}
        variant="outlined"
        color="primary"
        onClick={handleRefreshClick}
      >
        Refresh
      </Button>
    </Box>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const { theme, colorMode } = useMode();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={{ ...theme, ...colorMode } as ThemeOptions}>
              <ArticleContextProvider>
                <CssBaseline />
                <Router>
                  <ScrollToTop />
                  {children}
                </Router>
              </ArticleContextProvider>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
