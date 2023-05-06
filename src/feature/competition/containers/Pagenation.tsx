import { useMemo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { PAGE_UNIT } from "util/constant"
import Button from "../components/PaginationButton"
import { changeCurrentPage } from "../slice"

export default function PagenationContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { currentPage, competitionArray } = useAppSelector((state) => ({
    currentPage: state.competition.currentPage,
    competitionArray: state.competition.competitionArray,
  }))

  const [currentPageRangeFirstIndex, pageRange] = useMemo(() => {
    const currentPageRange = Math.floor(currentPage / PAGE_UNIT)
    const currentPageRangeFirstIndex = currentPageRange * PAGE_UNIT
    const nextPageRangeFirstIndex = currentPageRangeFirstIndex + PAGE_UNIT

    if (nextPageRangeFirstIndex <= competitionArray.length)
      return [currentPageRangeFirstIndex, PAGE_UNIT]
    return [
      currentPageRangeFirstIndex,
      competitionArray.length - currentPageRangeFirstIndex,
    ]
  }, [competitionArray, currentPage])

  const onClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={onClick(currentPageRangeFirstIndex - PAGE_UNIT)}>
        &lt;
      </Button>
      {Array.from({ length: pageRange }).map((_, index) => (
        <Button
          key={currentPageRangeFirstIndex + index}
          onClick={onClick(currentPageRangeFirstIndex + index)}
        >
          {currentPageRangeFirstIndex + index + 1}
        </Button>
      ))}
      <Button onClick={onClick(currentPageRangeFirstIndex + PAGE_UNIT)}>
        &gt;
      </Button>
    </div>
  )
}
