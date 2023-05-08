import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { Checkbox, Collapse, List } from "antd"
import { toggleTeamSelection } from "../slice"

const { Panel } = Collapse

interface IProps {
  query: string
}

function ListContainer({ query }: IProps): JSX.Element {
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
            club.selected &&
            (query === "" ||
              club.teamList.findIndex(
                (team) =>
                  team.PLAYER_NM1.search(query) !== -1 ||
                  team.PLAYER_NM2.search(query) !== -1
              )) !== -1 && (
              <Panel header={club.name} key={club.name}>
                <List
                  itemLayout="horizontal"
                  dataSource={club.teamList}
                  renderItem={(item, teamIndex) => {
                    if (
                      item.PLAYER_NM1.search(query) !== -1 ||
                      item.PLAYER_NM2.search(query) !== -1
                    )
                      return (
                        <List.Item
                          className="list"
                          onClick={selectTeam(clubIndex, teamIndex)}
                        >
                          <List.Item.Meta
                            title={`${item.PLAYER_NM1} & ${item.PLAYER_NM2}`}
                            description={`${item.EVENT_NM}`}
                          ></List.Item.Meta>
                          <Checkbox checked={item.selected} />
                        </List.Item>
                      )
                  }}
                />
              </Panel>
            )
        )}
      </Collapse>
    </div>
  )
}

export default ListContainer
