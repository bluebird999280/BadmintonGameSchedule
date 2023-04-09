import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { Checkbox, Collapse, List } from "antd"
import { toggleTeamSelection } from "../slice"

const { Panel } = Collapse

function ListContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList,
  }))

  const selectTeam = useCallback(
    (clubIndex: number, teamIndex: number) => () => {
      dispatch(toggleTeamSelection({ clubIndex, teamIndex }))
    },
    [dispatch]
  )

  return (
    <div>
      <Collapse>
        {list.map(
          (club, clubIndex) =>
            club.selected && (
              <Panel header={club.name} key={club.name}>
                <List
                  itemLayout="horizontal"
                  dataSource={club.teamList}
                  renderItem={(item, teamIndex) => (
                    <List.Item onClick={selectTeam(clubIndex, teamIndex)}>
                      <List.Item.Meta
                        title={`${item.PLAYER_NM1} & ${item.PLAYER_NM2}`}
                        description={`${item.EVENT_NM}`}
                      ></List.Item.Meta>
                      <Checkbox checked={item.selected} />
                    </List.Item>
                  )}
                />
              </Panel>
            )
        )}
      </Collapse>
    </div>
  )
}

export default ListContainer
