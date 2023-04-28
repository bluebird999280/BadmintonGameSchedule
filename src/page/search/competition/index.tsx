import { useState, useEffect, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { getCompetitionByName } from "feature/search/thunk"
import SearchFormContainer from "feature/search/competition/searchFormContainer"
import SearchListContainer from "feature/search/competition/searchListContainer"
import PagenationContainer from "feature/search/competition/pagenationContainer"
import { changePageStart } from "feature/search/slice"

function SearchCompetition(): JSX.Element {
  const dispatch = useAppDispatch()
  const pageStart = useAppSelector((state) => state.search.pageStart)
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

  // useEffect
  useEffect(() => {
    dispatch(
      getCompetitionByName({
        query,
        pageStart,
        pageLimit: PAGE_UNIT * LIST_UNIT * 2,
      })
    )
  }, [query, pageStart])

  const setPageStart = useCallback(
    (pageStart: number) => {
      dispatch(changePageStart(pageStart))
    },
    [dispatch]
  )

  return (
    <>
      <SearchFormContainer query={query} setQuery={setQuery} />
      <SearchListContainer currentPage={currentPage} />
      <PagenationContainer
        pageStart={pageStart}
        setPageStart={setPageStart}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default SearchCompetition
