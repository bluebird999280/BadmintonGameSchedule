import { useAppSelector } from "hook/redux"
import { Collapse, List } from "antd"
import { useCallback } from "react"
import { IClubList } from "../type"

const { Panel } = Collapse

function ListContainer(): JSX.Element {
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.filter((club) => club.selected),
  }))

  // const onClick = useCallback((club : IClubList) => () => {

  // }, [])

  return (
    <div>
      <Collapse>
        {list.map((club, index) => (
          <Panel header={club.name} key={club.name}>
            <List
              itemLayout="horizontal"
              dataSource={club.teamList}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={`${item.PLAYER_NM1} & ${item.PLAYER_NM2}`}
                    description={`${item.EVENT_NM}`}
                  >
                    <div>asdasdasd</div>
                  </List.Item.Meta>
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default ListContainer
