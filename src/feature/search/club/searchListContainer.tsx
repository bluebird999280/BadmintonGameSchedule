import { useCallback } from "react"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { LIST_UNIT } from "util/constant"
import Row from "component/search/ClubRow"
import { toggleSelection } from "../slice"

interface ISearchListContainerProps {
  currentPage: number
}

function SearchListContainer({
  currentPage,
}: ISearchListContainerProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.slice(
      currentPage * LIST_UNIT,
      (currentPage + 1) * LIST_UNIT
    ),
  }))

  const toggleClubSelection = useCallback(
    (index: number) => () => {
      dispatch(toggleSelection(currentPage * LIST_UNIT + index))
    },
    [dispatch, currentPage]
  )

  return (
    <>
      {list.map((club, index) => (
        <Row
          key={club.name}
          data={club}
          selected={club.selected}
          onClick={toggleClubSelection(index)}
        />
      ))}
    </>
  )
}

export default SearchListContainer
