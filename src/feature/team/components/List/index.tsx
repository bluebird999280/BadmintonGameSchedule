import { Checkbox, Collapse, List } from "antd"
import { ITeamData } from "feature/club/type"

const { Panel } = Collapse

export interface IListComponentProps {
  array: ITeamData[][]
}

export default function ListComponent({
  array,
}: IListComponentProps): React.ReactElement {
  return <></>
}
