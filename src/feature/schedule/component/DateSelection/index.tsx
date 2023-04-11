import { useState, useCallback } from "react"
import { Dropdown, Space } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import parseDate from "util/func/parseDate"
import { IDateSelectionProps, IOnClickDateProps } from "./type"
import { Wrapper } from "./style"

function DateSelection({ planDateList }: IDateSelectionProps): JSX.Element {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [currentSelectedDate, setCurrentSelectedDate] = useState(
    parseDate(planDateList[0].PLAN_DATE)
  )

  const onClickDate = useCallback(({ key }: IOnClickDateProps) => {
    setCurrentSelectedDate(parseDate(key))
    setIsDropDownOpen(false)
  }, [])

  const onOpenChange = useCallback((open: boolean) => {
    setIsDropDownOpen(open)
  }, [])

  const items = planDateList.map((planDate) => ({
    key: planDate.PLAN_DATE,
    label: <span>{parseDate(planDate.PLAN_DATE)}</span>,
    onClick: onClickDate,
  }))

  return (
    <Wrapper>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        open={isDropDownOpen}
        onOpenChange={onOpenChange}
      >
        <Space>
          <h2>{currentSelectedDate}</h2>
          {isDropDownOpen ? <UpOutlined /> : <DownOutlined />}
        </Space>
      </Dropdown>
    </Wrapper>
  )
}

export default DateSelection
