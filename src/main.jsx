import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import Login from "./Components/Login.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
// import Customdiv from "./Components/Customdiv";
// import Detailpage from "./Components/Detailpage";
// import Firstpage from "./Components/Firstpage";
// import Homepage from "./Components/Homepage.jsx";
import { MantineProvider } from "@mantine/core";
// import Aboutus from "./Components/Aboutus";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
