import { Wrapper, StyledInput } from "./style"

interface ISearchBarProps {
  query: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({ query, onChange }: ISearchBarProps): JSX.Element {
  return (
    <Wrapper>
      <StyledInput value={query} onChange={onChange} />
    </Wrapper>
  )
}

export default SearchBar
