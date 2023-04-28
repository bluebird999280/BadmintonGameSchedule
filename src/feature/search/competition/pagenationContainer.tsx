import { useCallback, useMemo } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppSelector } from "hook/redux"
import PaginationList from "component/search/CompetitionPaginationList"

interface PagenationContainerProps {
  currentPage: number
  changeCurrentPage: (to: number) => void
  pageStart: number
  setPageStart: (pageStart: number) => void
}

function PagenationContainer({
  currentPage,
  changeCurrentPage,
  pageStart,
  setPageStart,
}: PagenationContainerProps): JSX.Element {
  const { pageListLength } = useAppSelector((state) => ({
    pageListLength: state.search.competitionList.length,
  }))

  const currentPageRange = useMemo(
    () => Math.floor(currentPage / PAGE_UNIT),
    [currentPage]
  )

  const currentPageIndex = useMemo(
    () => currentPageRange * PAGE_UNIT,
    [currentPageRange]
  )
  const pageRange = useMemo(() => {
    const nextPageIndex = currentPageIndex + PAGE_UNIT

    if (nextPageIndex <= pageListLength) return PAGE_UNIT
    return PAGE_UNIT - nextPageIndex + pageListLength
  }, [pageListLength, currentPageIndex])

  const onClick = useCallback(
    (page: number) => () => {
      changeCurrentPage(page)
    },
    [changeCurrentPage]
  )

  const movePrevPagenationList = useCallback(() => {
    changeCurrentPage((currentPageRange - 1) * PAGE_UNIT)
  }, [changeCurrentPage, currentPageRange])

  const moveNextPagenationList = useCallback(() => {
    changeCurrentPage((currentPageRange + 1) * PAGE_UNIT)
    setPageStart(pageStart + PAGE_UNIT * LIST_UNIT * 2)
  }, [pageStart, changeCurrentPage, currentPageRange])

  return (
    <PaginationList
      length={pageListLength}
      pageRange={pageRange}
      currentPageIndex={currentPageIndex}
      currentPageRange={currentPageRange}
      onClick={onClick}
      movePrev={movePrevPagenationList}
      moveNext={moveNextPagenationList}
    />
  )
}

export default PagenationContainer
