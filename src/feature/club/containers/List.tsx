import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { selectClub } from "../slice"
import List from "../components/List"
import { useNavigate } from "react-router-dom"

export default function ListContainer(): React.ReactElement {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentPage, competition, clubTable, searchedClubNameArray } =
    useAppSelector((state) => ({
      currentPage: state.club.currentPage,
      competition: state.competition.competition,
      clubTable: state.club.clubTable,
      searchedClubNameArray: state.club.searchedClubNameArray,
    }))

  const onClick = useCallback(
    (clubName: string) => () => {
      dispatch(selectClub(clubName))
    },
    [dispatch]
  )

  if (competition === undefined) {
    return <>대회를 선택해주세요</>
  }
  if (clubTable === null) {
    return <>아직 클럽명단이 발표되지 않았습니다.</>
  }

  return (
    <>
      {searchedClubNameArray[currentPage]?.map((clubName) => (
        <List
          key={clubName}
          name={clubName}
          data={clubTable[clubName]}
          onClick={onClick(clubName)}
        />
      ))}
    </>
  )
}
