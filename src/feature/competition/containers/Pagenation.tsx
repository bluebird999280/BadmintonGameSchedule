import { useMemo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { LIST_UNIT, PAGE_UNIT } from "util/constant"
import Button from "../components/PaginationButton"
import { changeCurrentPage } from "../slice"
import { fetchCompetitions } from "../thunk"

export default function PagenationContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pageStart, currentPage, competitionArray } = useAppSelector(
    (state) => ({
      pageStart: state.competition.pageStart,
      currentPage: state.competition.currentPage,
      competitionArray: state.competition.competitionArray,
    })
  )

  const [currentPageRangeFirstIndex, pageRange] = useMemo(() => {
    const currentPageRange = Math.floor(currentPage / PAGE_UNIT)
    const currentPageRangeFirstIndex = currentPageRange * PAGE_UNIT
    const nextPageRangeFirstIndex = currentPageRangeFirstIndex + PAGE_UNIT
    let pageRange = competitionArray.length - currentPageRangeFirstIndex

    if (nextPageRangeFirstIndex <= competitionArray.length)
      pageRange = PAGE_UNIT

    return [currentPageRangeFirstIndex, pageRange]
  }, [competitionArray, currentPage])

  const onClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch, pageStart, competitionArray]
  )

  const onClickNextButton = useCallback(
    (page: number) => async () => {
      if (competitionArray.length - PAGE_UNIT === page) {
        await dispatch(fetchCompetitions())
      }
      dispatch(changeCurrentPage(page))
    },
    [dispatch, competitionArray]
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
          currentPageRangeFirstIndex + PAGE_UNIT >= competitionArray.length
        }
        onClick={onClickNextButton(currentPageRangeFirstIndex + PAGE_UNIT)}
      >
        &gt;
      </Button>
    </div>
  )
}
