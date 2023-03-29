import { useMemo, useCallback } from "react"
import { pageLimit, pageUnit } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeQuery, changePageStart, changeCurrentPage } from "./slice"
import { getCompetitionByName } from "./thunk"
import SearchForm from "./component/SearchForm"
import SearchList from "./component/SearchList"
import IndexButton from "./component/IndexButton"
import { Wrapper, Container } from "./style"

function Search(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()
  const { query, pageCompetionList, pageStart, previousPage, currentPage } =
    useAppSelector((state) => ({ ...state.search }))

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e: React.FormEvent | undefined) => {
      e?.preventDefault()
      dispatch(changePageStart(0))
      dispatch(
        getCompetitionByName({
          query,
          pageStart,
          pageLimit: pageLimit * 10,
        })
      )
    },
    [dispatch, query, pageStart]
  )

  const searchFormOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(event.target.value))
    },
    [dispatch]
  )

  const showCompetionList = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  // useMemo
  const pagenationList = useMemo(() => {
    const currentPageRange = Math.floor(currentPage / pageUnit)
    const previousPageRange = Math.floor(previousPage / pageUnit)
    const startPageRange = currentPageRange * pageUnit

    if (previousPageRange !== currentPageRange) {
      return Array.from({ length: pageUnit }).map((_, idx) => (
        <IndexButton
          key={startPageRange + idx + 1}
          index={startPageRange + idx + 1}
          onClick={showCompetionList(startPageRange + idx)}
        />
      ))
    }
  }, [showCompetionList, pageCompetionList, previousPage, currentPage])

  return (
    <div>
      <Wrapper>
        <Container>
          <SearchForm
            query={query}
            onChange={searchFormOnChange}
            onSubmit={searchFormOnSubmit}
          />
          {pageCompetionList !== undefined && (
            <>
              <div className="list">
                {pageCompetionList[currentPage].map((list, key) => (
                  <SearchList
                    key={key}
                    progress={
                      list.STAT === "4"
                        ? "progress"
                        : list.STAT === "5"
                        ? "completion"
                        : "schedule"
                    }
                    title={list.TOURNAMENT_NM}
                    date={list.TOUR_DATE}
                  />
                ))}
              </div>
              <div className="pagination">{pagenationList}</div>
            </>
          )}
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
