import { Wrapper } from "./style"
import { Dropdown, Space } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { useState, useCallback } from "react"

function DateSelection(): JSX.Element {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const items = [
    {
      key: "2023년 1월 1일",
      label: <span>2023년 1월 1일</span>,
    },
    {
      key: "2023년 1월 2일",
      label: <span>2023년 1월 2일</span>,
    },
    {
      key: "2023년 1월 3일",
      label: <span>2023년 1월 3일</span>,
    },
  ]

  const onOpenChange = useCallback((open: boolean) => {
    setIsDropDownOpen(open)
  }, [])

  return (
    <Wrapper>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        open={isDropDownOpen}
        onOpenChange={onOpenChange}
      >
        <Space>
          <h2>2023년 1월 1일</h2>
          {isDropDownOpen ? <UpOutlined /> : <DownOutlined />}
        </Space>
      </Dropdown>
    </Wrapper>
  )
}

export default DateSelection
