import { useMemo, useCallback } from "react"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { changeCurrentPage } from "../slice"
import Button from "../components/PaginationButton"
import { PAGE_UNIT } from "util/constant"

export default function PagenationContainer(): React.ReactElement {
  const dispatch = useAppDispatch()
  const { currentPage, searchedClubNameArray } = useAppSelector((state) => ({
    currentPage: state.club.currentPage,
    searchedClubNameArray: state.club.searchedClubNameArray,
  }))

  const [currentPageRangeFirstIndex, pageRange] = useMemo(() => {
    const currentPageRange = Math.floor(currentPage / PAGE_UNIT)
    const currentPageRangeFirstIndex = currentPageRange * PAGE_UNIT
    const nextPageRangeFirstIndex = currentPageRangeFirstIndex + PAGE_UNIT
    let pageRange = searchedClubNameArray.length - currentPageRangeFirstIndex

    if (nextPageRangeFirstIndex <= searchedClubNameArray.length)
      pageRange = PAGE_UNIT

    return [currentPageRangeFirstIndex, pageRange]
  }, [searchedClubNameArray, currentPage])

  const onClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        isHidden={currentPageRangeFirstIndex === 0}
        onClick={onClick(currentPageRangeFirstIndex - PAGE_UNIT)}
      >
        &lt;
      </Button>

      {Array.from({ length: pageRange }).map((_, index) => (
        <Button
          key={currentPageRangeFirstIndex + index}
          isHidden={false}
          onClick={onClick(currentPageRangeFirstIndex + index)}
        >
          {currentPageRangeFirstIndex + index + 1}
        </Button>
      ))}
      <Button
        isHidden={
          currentPageRangeFirstIndex + PAGE_UNIT >= searchedClubNameArray.length
        }
        onClick={onClick(currentPageRangeFirstIndex + PAGE_UNIT)}
      >
        &gt;
      </Button>
    </div>
  )
}
