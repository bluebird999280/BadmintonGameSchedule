import {
  Wrapper,
  Container,
  StyledInputWrapper,
  StyledInput,
  SearchImageWrapper,
} from "./style"
import { ISearchFormProps } from "./type"

const searchImageUrl = process.env.PUBLIC_URL + "/icon/search.png"
export default function Form({
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
