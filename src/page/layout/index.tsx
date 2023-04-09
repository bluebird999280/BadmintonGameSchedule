/*eslint @typescript-eslint/no-explicit-any : ["off"]*/
import { useState, useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Wrapper, BreadcrumbWrapper, Container } from "./style"
import { Breadcrumb } from "antd"

function itemRender(route: any) {
  return <Link to={route.href}>{route.title}</Link>
}

function LayoutPage(): JSX.Element {
  const { pathname } = useLocation()
  const [title, setTitle] = useState("홈")
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

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("홈")
        break
      case "/search/competition":
        setTitle("대회 검색")
        break
      case "/search/club":
        setTitle("클럽 검색")
        break
      case "/search/team":
        setTitle("팀 검색")
        break
      case "/schedule":
        setTitle("시간표")
        break
    }
  }, [pathname])

  return (
    <Wrapper>
      <Container>
        <div className="title">{title}</div>
        <BreadcrumbWrapper>
          <Breadcrumb
            items={items}
            itemRender={itemRender}
            style={{
              fontSize: "20px",
            }}
          />
        </BreadcrumbWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  )
}

export default LayoutPage
