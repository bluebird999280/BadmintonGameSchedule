import { DownloadOutlined } from "@ant-design/icons"
import { Button } from "antd"

function DownloadSchedule(): JSX.Element {
  return (
    <Button type="default" icon={<DownloadOutlined />} size={"large"}>
      Download
    </Button>
  )
}

export default DownloadSchedule
