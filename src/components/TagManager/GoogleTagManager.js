export const initializeGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-RBXZX6NZ45");

  const gtmScript = document.createElement("script");
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=G-RBXZX6NZ45`;
  gtmScript.async = true;
  document.body.appendChild(gtmScript);
};
