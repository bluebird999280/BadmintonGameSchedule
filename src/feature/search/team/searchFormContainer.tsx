import { useCallback } from "react"
import SearchForm from "component/search/SearchForm"

interface IProps {
  query: string
  setQuery: (query: string) => void
}

function FormContainer({ query, setQuery }: IProps): JSX.Element {
  const searchFormOnSubmit = useCallback(
    (e: React.FormEvent<Element> | undefined) => {
      e?.preventDefault()
    },
    []
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

export default FormContainer
