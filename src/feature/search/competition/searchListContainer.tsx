import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeCompetition } from "feature/schedule/slice"
import { ICompetitionData } from "../type"
import Row from "component/search/CompetitionRow"
import { getClubListByCompetition } from "../thunk"

interface ISearchListContainerProps {
  currentPage: number
}

function SearchListContainer({
  currentPage,
}: ISearchListContainerProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { list, selectedCompetition } = useAppSelector((state) => ({
    list: state.search.competitionList,
    selectedCompetition: state.schedule.competition,
  }))

  const rowOnClick = useCallback(
    (competition: ICompetitionData) => () => {
      dispatch(changeCompetition(competition))
      dispatch(
        getClubListByCompetition({ competitionId: competition?.TOURNAMENT_ID })
      )
    },
    [dispatch]
  )

  return (
    <>
      {list[currentPage] !== undefined &&
        list[currentPage].map((data, key) => (
          <Row
            key={key}
            data={data}
            selected={selectedCompetition === data}
            onClick={rowOnClick(data)}
          />
        ))}
    </>
  )
}

export default SearchListContainer
