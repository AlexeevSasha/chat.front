import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import { AuthProviderPaths } from "@/common/constants/routers";

export const RouterCustomProvider = () => {
  const router = useMemo(() => createBrowserRouter(AuthProviderPaths), []);

  return <RouterProvider router={router} />;
};
