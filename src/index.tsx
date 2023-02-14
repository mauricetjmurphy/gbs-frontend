import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

declare const process: {
  env: {
    NODE_ENV: "development" | "staging" | "production";
  };
};

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "staging") {
  require("dotenv").config({ path: ".env.staging" });
} else if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: ".env.production" });
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("Could not find element with id 'root'");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
