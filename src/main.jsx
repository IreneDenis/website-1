import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import { MantineProvider } from "@mantine/core";
// import Customdiv from "./Components/Customdiv";
import { BrowserRouter } from "react-router-dom";
// import Homepage from "./Components/Homepage";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> <PrimeReactProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </PrimeReactProvider></BrowserRouter>
   
    
  </React.StrictMode>
);
