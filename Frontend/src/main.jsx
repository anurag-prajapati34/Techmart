import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes.jsx";
import { ProductContextProvider } from "./contexts/ProductContext.jsx";
import { FirebaseAuthContextProvider } from "./contexts/FirebaseAuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <FirebaseAuthContextProvider>

<RouterProvider router={routes} />

     

    </FirebaseAuthContextProvider>
  </ProductContextProvider>
);
