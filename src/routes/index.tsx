import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Component } = await import("src/routes/page1");
          return { loader: Component.loader, Component };
        },
      },
      {
        path: "page2",
        lazy: async () => {
          const { Component } = await import("src/routes/page2");
          return { loader: Component.loader, Component };
        },
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
