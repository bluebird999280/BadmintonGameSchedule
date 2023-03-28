import {
  Wrapper,
  Container,
  StyledInputWrapper,
  StyledInput,
  SearchImageWrapper,
} from "./style"
const searchImageUrl = process.env.PUBLIC_URL + "/icon/search.png"
interface ISearchFormProps {
  query: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent | undefined) => void
}

function SearchForm({
  query,
  onChange,
  onSubmit,
}: ISearchFormProps): JSX.Element {
  return (
    <Wrapper>
      <Container onSubmit={onSubmit}>
        <StyledInputWrapper>
          <StyledInput value={query} onChange={onChange} />
        </StyledInputWrapper>
        <SearchImageWrapper type="submit">
          <img src={searchImageUrl} />
        </SearchImageWrapper>
      </Container>
    </Wrapper>
  )
}

export default SearchForm
