import { useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import List from "../components/List"
import { changeCompetition } from "../slice"
import { ICompetition } from "../type"
import { fetchClubs } from "feature/club/thunk"

export default function ListContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { currentPage, competition, competitions } = useAppSelector(
    (state) => ({
      currentPage: state.competition.currentPage,
      competition: state.competition.competition,
      competitions: state.competition.competitionArray,
    })
  )

  const onClick = useCallback(
    (competition: ICompetition) => () => {
      dispatch(changeCompetition(competition))
      dispatch(fetchClubs())
    },
    [dispatch]
  )

  useEffect(() => {
    if (competition?.ENTRY_OPEN_YN === "N")
      alert("대진표가 아직 만들어지지 않았습니다.")
  }, [competition])

  return (
    <>
      {competitions[currentPage] &&
        competitions[currentPage].map((c, id) => (
          <List
            key={id}
            data={c}
            selected={c === competition}
            onClick={onClick(c)}
          />
        ))}
    </>
  )
}
