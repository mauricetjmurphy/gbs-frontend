import * as React from "react";
// import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

// import { store } from "../stores/store";
import { ScrollToTop } from "../lib/ScrollToTop";
import theme from "../styles/Styles";

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
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h1 className="text-[24px] font-bold">Please bear with us..</h1>
      <p>
        Sorry for the inconvenience. We suggest you <b>refresh the page</b> to
        resolve the issue.
      </p>
      <button
        className="mt-4 py-2 px-4 bg-red-600 border text-white border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none"
        onClick={handleRefreshClick}
      >
        Refresh
      </button>
    </div>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Router>
              <ScrollToTop />
              {children}
            </Router>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
