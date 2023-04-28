import { useCallback } from "react"
import { useAppDispatch } from "hook/redux"
import SearchForm from "component/search/SearchForm"

interface ISearchFormContainerProps {
  query: string
  setQuery: (query: string) => void
}

function SearchFormContainer({
  query,
  setQuery,
}: ISearchFormContainerProps): JSX.Element {
  // redux
  const dispatch = useAppDispatch()

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
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
