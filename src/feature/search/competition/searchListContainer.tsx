import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeCompetition } from "feature/schedule/slice"
import { ICompetitionData } from "../type"
import Row from "component/search/Row"

function SearchListContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { list, currentPage, selectedCompetition } = useAppSelector(
    (state) => ({
      ...state.search.competition,
      selectedCompetition: state.schedule.competition,
    })
  )

  const rowOnClick = useCallback(
    (competition: ICompetitionData) => () => {
      dispatch(changeCompetition(competition))
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
