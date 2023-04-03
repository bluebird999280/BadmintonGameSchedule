import { useCallback } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import PaginationList from "../component/PaginationList"
import { changeCurrentPage } from "../slice"

function PagenationContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pageListLength, currentPageRange } = useAppSelector((state) => ({
    pageListLength: state.search.list.length,
    currentPageRange: Math.floor(state.search.currentPage / LIST_UNIT),
  }))

  const pagenationButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )
  const movePrevPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange - 1) * PAGE_UNIT))
  }, [dispatch, currentPageRange])
  const moveNextPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange + 1) * PAGE_UNIT))
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
