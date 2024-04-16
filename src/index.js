import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RouterPage from "./config/routes";
import "./index.css";
import Loading from "./components/Loading";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(delay);
    });

    return <>{isLoading ? <Loading /> : <RouterPage />}</>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
