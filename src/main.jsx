import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import ContextProvider from "./provider/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
