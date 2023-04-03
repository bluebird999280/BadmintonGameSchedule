import { useCallback } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import SearchForm from "./component/SearchForm"
import PaginationList from "./component/PaginationList"
import { getCompetitionByName } from "./thunk"
import { changeQuery, changeCurrentPage } from "./slice"
import { Wrapper, Container } from "./style"

function Search(): React.ReactElement {
  // redux
  const dispatch = useAppDispatch()
  const { query, pageListLength, currentPageRange } = useAppSelector(
    (state) => ({
      query: state.search.query,
      pageListLength: state.search.list.length,
      currentPageRange: Math.floor(state.search.currentPage / PAGE_UNIT),
    })
  )

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

  return (
    <div>
      <Wrapper>
        <Container>
          <SearchForm
            query={query}
            onChange={searchFormOnChange}
            onSubmit={searchFormOnSubmit}
          />

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
