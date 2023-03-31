import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "page/layout"
import HomePage from "page/home"
import SearchCompetitionPage from "page/search/competition"
import SearchClubPage from "page/search/club"
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
        path: "/search/competition",
        element: <SearchCompetitionPage />,
      },
      {
        path: "/search/club",
        element: <SearchClubPage />,
      },
      {
        path: "/search/team",
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
