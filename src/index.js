import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routing";
import { store } from "./store/strore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
