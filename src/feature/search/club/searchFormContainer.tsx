import { useState, useCallback } from "react"
import { useAppDispatch } from "hook/redux"
import { divideClubListByQuery } from "../slice"
import SearchForm from "component/search/SearchForm"

function SearchFormContainer(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()

  // useState
  const [query, setQuery] = useState("")

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(divideClubListByQuery(query))
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
