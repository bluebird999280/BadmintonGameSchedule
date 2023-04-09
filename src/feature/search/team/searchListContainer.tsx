import { useAppSelector } from "hook/redux"
import { Collapse } from "antd"

const { Panel } = Collapse

function ListContainer(): JSX.Element {
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.filter((club) => club.selected),
  }))

  return (
    <div>
      <Collapse>
        {list.map((club, index) => (
          <Panel header={club.name} key={club.name}></Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default ListContainer
