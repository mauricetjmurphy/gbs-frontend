import React, { useEffect } from "react";

export const DisplayAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-2172324982070502"
      data-ad-slot="6598112997"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
