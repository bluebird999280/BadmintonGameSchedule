import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "page/Main"
import SchedulePage from "page/Schedule"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
  },
])

function RouterProviderHoc(): JSX.Element {
  return <RouterProvider router={router} />
}

export default RouterProviderHoc
