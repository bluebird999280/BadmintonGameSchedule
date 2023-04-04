import { useCallback } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import PaginationList from "component/search/PaginationList"
import { changeCurrentPage } from "../slice"

function PagenationContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pageListLength, currentPageRange } = useAppSelector((state) => ({
    pageListLength: state.search.competition.list.length,
    currentPageRange: Math.floor(
      state.search.competition.currentPage / LIST_UNIT
    ),
  }))

  const pagenationButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage({ name: "competition", currentPage: page }))
    },
    [dispatch]
  )
  const movePrevPagenationList = useCallback(() => {
    dispatch(
      changeCurrentPage({
        name: "competition",
        currentPage: (currentPageRange - 1) * PAGE_UNIT,
      })
    )
  }, [dispatch, currentPageRange])
  const moveNextPagenationList = useCallback(() => {
    dispatch(
      changeCurrentPage({
        name: "competition",
        currentPage: (currentPageRange + 1) * PAGE_UNIT,
      })
    )
  }, [dispatch, currentPageRange])

  return (
    <PaginationList
      length={pageListLength}
      currentPageRange={currentPageRange}
      onClick={pagenationButtonOnClick}
      movePrev={movePrevPagenationList}
      moveNext={moveNextPagenationList}
    />
  )
}

export default PagenationContainer
