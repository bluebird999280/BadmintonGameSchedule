import { useCallback } from "react"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { changeQuery } from "../slice"
import { fetchCompetitions } from "../thunk"
import Form from "../components/Form"

export default function FormContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector((state) => ({
    query: state.competition.query,
  }))

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(e.target.value))
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(fetchCompetitions())
    },
    [dispatch, query]
  )

  return <Form query={query} onChange={onChange} onSubmit={onSubmit} />
}
