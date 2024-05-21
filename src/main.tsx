import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screens";
import "./index.css";
import "react-toastify/ReactToastify.css";

import RootLayout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>
);
