import { Wrapper, SearchImageWrapper } from "./style"

const searchImageUrl = process.env.PUBLIC_URL + "/icon/search.png"

export interface ISearchButtonProps {
  onClick: (e: React.FormEvent | undefined) => void
}

function SearchButton({ onClick }: ISearchButtonProps): JSX.Element {
  return (
    <Wrapper onClick={onClick}>
      <SearchImageWrapper>
        <img src={searchImageUrl} />
      </SearchImageWrapper>
    </Wrapper>
  )
}

export default SearchButton
