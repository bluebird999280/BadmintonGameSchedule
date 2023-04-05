import { useCallback, useMemo } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppSelector } from "hook/redux"
import PaginationList from "component/search/PaginationList"

interface PagenationContainerProps {
  currentPage: number
  changeCurrentPage: (to: number) => () => void
}

function PagenationContainer({
  currentPage,
  changeCurrentPage,
}: PagenationContainerProps): JSX.Element {
  const { pageListLength } = useAppSelector((state) => ({
    pageListLength: state.search.competitionList.length,
  }))

  const currentPageRange = useMemo(
    () => Math.floor(currentPage / LIST_UNIT),
    [currentPage]
  )

  const pagenationButtonOnClick = useCallback(
    (page: number) => () => {
      changeCurrentPage(page)
    },
    []
  )
  const movePrevPagenationList = useCallback(() => {
    changeCurrentPage((currentPageRange - 1) * PAGE_UNIT)
  }, [changeCurrentPage, currentPageRange])

  const moveNextPagenationList = useCallback(() => {
    changeCurrentPage((currentPageRange + 1) * PAGE_UNIT)
  }, [changeCurrentPage, currentPageRange])

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
