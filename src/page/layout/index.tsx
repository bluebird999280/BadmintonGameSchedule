import { ExitWrapper } from "./style"
/*eslint @typescript-eslint/no-explicit-any : ["off"]*/
import { useState, useEffect, useCallback } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import {
  Wrapper,
  BreadcrumbWrapper,
  Container,
  MenuWrapper,
  MobileMenuWrapper,
  MobileMenuWrap,
} from "./style"
import { Breadcrumb } from "antd"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"

function itemRender(route: any) {
  return <Link to={route.href}>{route.title}</Link>
}

function LayoutPage(): JSX.Element {
  const { pathname } = useLocation()
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false)
  const [title, setTitle] = useState("홈")
  const items = [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "대회 검색",
      href: "/competition",
    },
    {
      title: "클럽 검색",
      href: "/club",
    },
    {
      title: "팀 검색",
      href: "/team",
    },
    {
      title: "시간표",
      href: "/schedule",
    },
  ]

  const menuBarOnClick = useCallback(() => {
    setIsMenuButtonClicked((clicked) => !clicked)
  }, [setIsMenuButtonClicked])

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("홈")
        break
      case "/competition":
        setTitle("대회 검색")
        break
      case "/club":
        setTitle("클럽 검색")
        break
      case "/team":
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
        <MenuWrapper>
          <MobileMenuWrapper>
            {isMenuButtonClicked ? (
              <MobileMenuWrap>
                <ExitWrapper>
                  <CloseOutlined onClick={menuBarOnClick} />
                </ExitWrapper>
                <span className="title">메뉴</span>
                <ul>
                  {items.map((item) => (
                    <li key={item.href} onClick={menuBarOnClick}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuWrap>
            ) : (
              <MenuOutlined onClick={menuBarOnClick} />
            )}
          </MobileMenuWrapper>
          <BreadcrumbWrapper>
            <Breadcrumb
              items={items}
              itemRender={itemRender}
              style={{
                fontSize: "20px",
              }}
            />
          </BreadcrumbWrapper>
        </MenuWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  )
}

export default LayoutPage
