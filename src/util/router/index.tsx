import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "page/layout"
import HomePage from "page/home"
import CompetitionPage from "page/competition"
import ClubPage from "page/club"
import SearchTeamPage from "page/search/team"
import SchedulePage from "page/schedule"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/competition",
        element: <CompetitionPage />,
      },
      {
        path: "/club",
        element: <ClubPage />,
      },
      {
        path: "/team",
        element: <SearchTeamPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
    ],
  },
])

function RouterProviderHoc(): JSX.Element {
  return <RouterProvider router={router} />
}
export default RouterProviderHoc
