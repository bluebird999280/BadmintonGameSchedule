import { useCallback, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { LIST_UNIT } from "util/constant"
import { Collapse, List, Checkbox } from "antd"
import { selectTeam } from "feature/club/slice"

const { Panel } = Collapse

function ListContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { query, clubTable, currentPage } = useAppSelector((state) => ({
    query: state.team.query,
    clubTable: state.club.clubTable,
    currentPage: state.team.currentPage,
  }))

  const onClick = useCallback(
    (clubName: string, teamIndex: number) => () => {
      dispatch(selectTeam({ clubName, teamIndex }))
    },
    [dispatch]
  )

  const clubNameArray = useMemo(() => {
    if (clubTable !== null) {
      return Object.keys(clubTable)
        .filter(
          (name) =>
            clubTable[name].selected &&
            clubTable[name].team.findIndex(
              (team) =>
                team.PLAYER_NM1.search(query) !== -1 ||
                team.PLAYER_NM2.search(query) !== -1
            ) !== -1
        )
        .sort((n1, n2) => clubTable[n1].index - clubTable[n2].index)
        .slice(currentPage * LIST_UNIT, (currentPage + 1) * LIST_UNIT)
    }
    return null
  }, [query, clubTable])

  return (
    <Collapse>
      {clubTable !== null &&
        clubNameArray !== null &&
        clubNameArray.map((clubName) => (
          <Panel header={clubName} key={clubName}>
            <List
              itemLayout="horizontal"
              dataSource={clubTable[clubName].team}
              renderItem={(item, teamIndex) =>
                (query === "" ||
                  item.PLAYER_NM1.search(query) !== -1 ||
                  item.PLAYER_NM2.search(query) !== -1) && (
                  <List.Item onClick={onClick(clubName, teamIndex)}>
                    <List.Item.Meta
                      title={`${item.PLAYER_NM1}, ${item.PLAYER_NM2}`}
                      description={`${item.EVENT_NM}`}
                    />
                    <Checkbox checked={item.selected} />
                  </List.Item>
                )
              }
            />
          </Panel>
        ))}
    </Collapse>
  )
}

export default ListContainer
