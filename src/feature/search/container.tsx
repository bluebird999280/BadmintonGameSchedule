import { useMemo, useCallback } from "react"
import { pageLimit } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeQuery, changePageStart, changeCurrentPage } from "./slice"
import { getCompetitionByName } from "./thunk"
import SearchForm from "feature/search/component/SearchForm"
import SearchList from "./component/SearchList"
import { Wrapper, Container } from "./style"
import PagenationContainer from "feature/pagenation/container"

function Search(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()
  const { query, pageCompetionList, pageStart, currentPage } = useAppSelector(
    (state) => ({ ...state.search })
  )

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(changePageStart(0))
      dispatch(
        getCompetitionByName({
          query,
          pageStart,
          pageLimit: pageLimit * 2 * 10, // 현재 pagenation 리스트와 다음 pagenation 리스트를 가져온다.
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
          <div className="pagination">
            <PagenationContainer />
          </div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
