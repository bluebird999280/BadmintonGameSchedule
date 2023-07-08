export interface ISearchFormProps {
  query: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent | undefined) => void
}
