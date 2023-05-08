import { useState, useCallback, useEffect } from "react"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"
import { useAppDispatch } from "hook/redux"
import SearchForm from "component/search/SearchForm"
import { getCompetitionByName } from "../thunk"

function SearchFormContainer(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()

  // useState
  const [query, setQuery] = useState("")

  // useEffect
  useEffect(() => {
    dispatch(
      getCompetitionByName({
        query,
        pageStart: 0,
        pageLimit: PAGE_UNIT * LIST_UNIT * 2,
      })
    )
  }, [])

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
      setQuery(event.target.value)
    },
    []
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
