import React, { useEffect } from "react";

export const MultiplexAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style="display:block"
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-2172324982070502"
      data-ad-slot="6953336219"
    ></ins>
  );
};
