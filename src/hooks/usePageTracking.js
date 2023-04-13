import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Set the page field in the dataLayer to the current page's URL
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      page: location.pathname + location.search,
    });
  }, [location]);
};

export default usePageTracking;
