import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        lazy: () => import("src/routes/page1"),
      },
      {
        path: "page2",
        lazy: () => import("src/routes/page2"),
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
