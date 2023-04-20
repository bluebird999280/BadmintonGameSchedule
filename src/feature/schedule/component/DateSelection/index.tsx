import { useState, useCallback, useEffect } from "react"
import { Dropdown, Space } from "antd"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import parseDate from "util/func/parseDate"
import { IDateSelectionProps, IOnClickDateProps } from "./type"
import { Wrapper } from "./style"

function DateSelection({
  currentSelectedDate,
  setCurrentSelectedDate,
  planDateList,
}: IDateSelectionProps): JSX.Element {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const onClickDate = useCallback(({ key }: IOnClickDateProps) => {
    setCurrentSelectedDate(key)
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

  useEffect(() => {
    setCurrentSelectedDate(planDateList[0].PLAN_DATE)
  }, [planDateList])

  return (
    <Wrapper>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        open={isDropDownOpen}
        onOpenChange={onOpenChange}
      >
        <Space>
          <h2>{parseDate(currentSelectedDate)}</h2>
          {isDropDownOpen ? <UpOutlined /> : <DownOutlined />}
        </Space>
      </Dropdown>
    </Wrapper>
  )
}

export default DateSelection
