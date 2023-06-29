import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { searchClub, changeQuery } from "../slice"
import Form from "../components/Form"

export default function FormContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector((state) => ({
    query: state.club.query,
  }))

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(e?.target.value))
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(searchClub())
    },
    [dispatch]
  )

  return <Form query={query} onChange={onChange} onSubmit={onSubmit} />
}
