import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { selectClub } from "../slice"
import List from "../components/List"

export default function ListContainer(): React.ReactElement {
  const dispatch = useAppDispatch()
  const { currentPage, clubTable, searchedClubNameArray } = useAppSelector(
    (state) => ({
      currentPage: state.club.currentPage,
      clubTable: state.club.clubTable,
      searchedClubNameArray: state.club.searchedClubNameArray,
    })
  )

  const onClick = useCallback(
    (clubName: string) => () => {
      dispatch(selectClub(clubName))
    },
    [dispatch]
  )

  if (clubTable === null) return <></>
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
