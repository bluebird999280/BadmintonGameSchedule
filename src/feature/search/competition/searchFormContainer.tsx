import { useCallback } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch, useAppSelector } from "hook/redux"
import SearchForm from "component/search/SearchForm"
import { getCompetitionByName } from "../thunk"
import { changeQuery } from "../slice"

function SearchFormContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const query = useAppSelector((state) => state.search.query)

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

  return (
    <SearchForm
      query={query}
      onChange={searchFormOnChange}
      onSubmit={searchFormOnSubmit}
    />
  )
}

export default SearchFormContainer
