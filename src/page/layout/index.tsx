import { Outlet } from "react-router-dom"
import { Wrapper, BreadcrumbWrapper } from "./style"
import { Breadcrumb } from "antd"

function LayoutPage(): JSX.Element {
  const items = [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "대회 검색",
      href: "/search/competition",
    },
    {
      title: "클럽 검색",
      href: "/search/club",
    },
    {
      title: "팀 검색",
      href: "/search/team",
    },
    {
      title: "시간표",
      href: "/schedule",
    },
  ]

  return (
    <Wrapper>
      <BreadcrumbWrapper>
        <Breadcrumb items={items} />
      </BreadcrumbWrapper>
      <Outlet />
    </Wrapper>
  )
}

export default LayoutPage
