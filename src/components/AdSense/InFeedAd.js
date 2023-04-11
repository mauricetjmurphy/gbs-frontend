import React, { useEffect } from "react";

export const InFeedAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style="display:block"
      data-ad-format="fluid"
      data-ad-layout-key="-5p+d3+1o-cv+cx"
      data-ad-client="ca-pub-2172324982070502"
      data-ad-slot="3397234582"
    ></ins>
  );
};
