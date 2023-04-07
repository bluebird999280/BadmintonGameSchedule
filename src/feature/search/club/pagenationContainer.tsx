import { useCallback, useMemo } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppSelector } from "hook/redux"
import PaginationList from "component/search/PaginationList"

interface PagenationContainerProps {
  currentPage: number
  changeCurrentPage: (to: number) => void
}

function PagenationContainer({
  currentPage,
  changeCurrentPage,
}: PagenationContainerProps): JSX.Element {
  const { pageListLength } = useAppSelector((state) => ({
    pageListLength: state.search.clubList.filter((club) => club.searched)
      .length,
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
    const pageLength = Math.ceil(pageListLength / LIST_UNIT)

    if (nextPageIndex <= pageLength) return PAGE_UNIT
    return PAGE_UNIT - nextPageIndex + pageLength
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
  }, [changeCurrentPage, currentPageRange])

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
