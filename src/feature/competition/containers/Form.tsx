import { useCallback, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "hook/redux"
import {
  changeCompetition,
  changeCurrentPage,
  changePageStart,
  changeQuery,
} from "../slice"
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
      dispatch(changePageStart(0))
      dispatch(changeCurrentPage(0))
      dispatch(changeCompetition(undefined))
      dispatch(fetchCompetitions())
    },
    [dispatch, query]
  )

  useEffect(() => {
    onSubmit()
  }, [])

  return <Form query={query} onChange={onChange} onSubmit={onSubmit} />
}
