import { useState, useEffect, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import SearchForm from "component/search/SearchForm"
import { getClubListByCompetition } from "../thunk"

function SearchFormContainer(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()
  const competition = useAppSelector((state) => state.schedule.competition)

  // useState
  const [query, setQuery] = useState("")

  // useEffect
  useEffect(() => {
    dispatch(
      getClubListByCompetition({ competitionId: competition?.TOURNAMENT_ID })
    )
  }, [dispatch, competition])

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
