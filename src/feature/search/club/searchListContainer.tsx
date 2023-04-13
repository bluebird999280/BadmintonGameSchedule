import { useCallback } from "react"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { LIST_UNIT } from "util/constant"
import Row from "component/search/ClubRow"
import { toggleClubSelection } from "../slice"

interface ISearchListContainerProps {
  currentPage: number
}

function SearchListContainer({
  currentPage,
}: ISearchListContainerProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.filter((club) => club.searched),
  }))

  const clickClub = useCallback(
    (clubName: string) => () => {
      dispatch(toggleClubSelection(clubName))
    },
    [dispatch, currentPage]
  )

  return (
    <>
      {list !== undefined &&
        list
          .slice(currentPage * LIST_UNIT, (currentPage + 1) * LIST_UNIT)
          .map((club) => (
            <Row
              key={club.name}
              data={club}
              selected={club.selected}
              onClick={clickClub(club.name)}
            />
          ))}
    </>
  )
}

export default SearchListContainer
