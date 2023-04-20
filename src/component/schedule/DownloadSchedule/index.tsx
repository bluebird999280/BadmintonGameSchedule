import { DownloadOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { IDownloadSchedule } from "./type"

function DownloadSchedule({ onClick }: IDownloadSchedule): JSX.Element {
  return (
    <Button
      type="default"
      icon={<DownloadOutlined />}
      size={"large"}
      onClick={onClick}
    >
      Download
    </Button>
  )
}

export default DownloadSchedule
