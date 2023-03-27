import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "page/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
])

function RouterProviderHoc(): JSX.Element {
  return <RouterProvider router={router} />
}

export default RouterProviderHoc
