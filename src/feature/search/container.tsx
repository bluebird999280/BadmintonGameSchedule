import { useMemo, useCallback } from "react"
import { pageLimit, pageUnit } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeQuery, changePageStart, changeCurrentPage } from "./slice"
import { getCompetitionByName } from "./thunk"
import SearchForm from "common/component/SearchForm"
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
    (e?: React.FormEvent) => {
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

  const indexButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  // useMemo
  const searchList = useMemo(() => {
    if (
      pageCompetionList.length === 0 ||
      pageCompetionList[currentPage] === undefined
    )
      return <></>
    return pageCompetionList[currentPage].map((list, key) => (
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
    ))
  }, [pageCompetionList, currentPage])

  const pagenationList = useMemo(() => {
    if (pageCompetionList.length === 0) return <></>

    const currentPageRange = Math.floor(currentPage / pageUnit)
    const previousPageRange = Math.floor(previousPage / pageUnit)
    const startPageRange = currentPageRange * pageUnit
    if (previousPageRange !== currentPageRange) {
      return Array.from({ length: pageUnit }).map((_, index) => (
        <IndexButton
          key={startPageRange + index + 1}
          index={startPageRange + index + 1}
          onClick={indexButtonOnClick(startPageRange + index)}
        />
      ))
    }
  }, [pageCompetionList, indexButtonOnClick, previousPage, currentPage])

  return (
    <div>
      <Wrapper>
        <Container>
          <SearchForm
            query={query}
            onChange={searchFormOnChange}
            onSubmit={searchFormOnSubmit}
          />
          <div className="list">{searchList}</div>
          <div className="pagination">{pagenationList}</div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
