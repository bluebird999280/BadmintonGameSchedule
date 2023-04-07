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
  const { list } = useAppSelector((state) => ({
    list: state.search.clubList.filter((club) => club.searched),
  }))

  const pageListLength = useMemo(() => list.length, [list])

  const currentPageRange = useMemo(
    () => Math.floor(currentPage / LIST_UNIT),
    [currentPage]
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
      onClick={changeCurrentPage}
      movePrev={movePrevPagenationList}
      moveNext={moveNextPagenationList}
    />
  )
}

export default PagenationContainer
