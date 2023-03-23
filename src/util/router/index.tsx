import { createBrowserRouter, RouterProvider } from "react-router-dom";

interface IRouterProviderHocProps {
  children: JSX.Element;
}

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

function RouterProviderHoc({ children }: IRouterProviderHocProps): JSX.Element {
  return <RouterProvider router={router} fallbackElement={children} />;
}

export default RouterProviderHoc;
