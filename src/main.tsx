import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
