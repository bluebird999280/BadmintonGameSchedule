import { useAppDispatch, useAppSelector } from "hook/redux"
import Row from "component/search/ClubRow"
import { LIST_UNIT } from "util/constant"
import { Collapse } from "antd"

const { Panel } = Collapse

interface ISearchListContainerProps {
  currentPage: number
}

function SearchListContainer({
  currentPage,
}: ISearchListContainerProps): JSX.Element {
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.slice(
      currentPage * LIST_UNIT,
      (currentPage + 1) * LIST_UNIT
    ),
  }))

  return (
    <Collapse>
      {list.map((club) => (
        <Panel header={club.name} key={club.name}>
          {club.teamList.map((team) => (
            <Row
              key={team.ENTRY_ID}
              data={team}
              selected
              onClick={() => {
                console.log(1)
              }}
            />
          ))}
        </Panel>
      ))}
    </Collapse>
  )
}

export default SearchListContainer
