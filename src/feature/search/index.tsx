import { useMemo, useCallback } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import SearchForm from "./component/SearchForm"
import Row from "./component/Row"
import PaginationList from "./component/PaginationList"
import { getCompetitionByName } from "./thunk"
import { changeQuery, changeCurrentPage } from "./slice"
import { Wrapper, Container } from "./style"

function Search(): React.ReactElement {
  // redux
  const dispatch = useAppDispatch()
  const { list, query, currentPage, pageListLength, currentPageRange } =
    useAppSelector((state) => ({
      ...state.search,
      pageListLength: state.search.list.length,
      currentPageRange: Math.floor(state.search.currentPage / LIST_UNIT),
    }))

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(
        getCompetitionByName({
          query,
          pageStart: 0,
          pageLimit: PAGE_UNIT * LIST_UNIT * 2,
        })
      )
    },
    [dispatch, query]
  )
  const searchFormOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(event.target.value))
    },
    [dispatch]
  )
  const pagenationButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )
  const movePrevPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange - 1) * PAGE_UNIT))
  }, [dispatch, currentPageRange])
  const moveNextPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange + 1) * PAGE_UNIT))
  }, [dispatch, currentPageRange])

  // useMemo
  const showResultRow = useMemo(() => {
    if (list[currentPage] !== undefined)
      return list[currentPage].map((data, key) => <Row key={key} data={data} />)
  }, [list, currentPage])

  return (
    <div>
      <Wrapper>
        <Container>
          <SearchForm
            query={query}
            onChange={searchFormOnChange}
            onSubmit={searchFormOnSubmit}
          />
          {showResultRow}
          <PaginationList
            length={pageListLength}
            currentPageRange={currentPageRange}
            onClick={pagenationButtonOnClick}
            movePrev={movePrevPagenationList}
            moveNext={moveNextPagenationList}
          />
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
